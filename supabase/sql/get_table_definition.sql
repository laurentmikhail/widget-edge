-- Run this in the Supabase SQL Editor.
-- Change these two values to the table you want to migrate.
with target as (
  select
    'public'::text as table_schema,
    'widgets'::text as table_name
)
select
  'columns' as section,
  jsonb_agg(
    jsonb_build_object(
      'column_name', c.column_name,
      'ordinal_position', c.ordinal_position,
      'data_type', c.data_type,
      'udt_name', c.udt_name,
      'is_nullable', c.is_nullable,
      'column_default', c.column_default,
      'character_maximum_length', c.character_maximum_length,
      'numeric_precision', c.numeric_precision,
      'numeric_scale', c.numeric_scale
    )
    order by c.ordinal_position
  ) as definition
from information_schema.columns c
join target t on t.table_schema = c.table_schema and t.table_name = c.table_name

union all

select
  'constraints' as section,
  jsonb_agg(
    jsonb_build_object(
      'constraint_name', con.conname,
      'constraint_type', con.contype,
      'definition', pg_get_constraintdef(con.oid, true)
    )
    order by con.conname
  ) as definition
from pg_constraint con
join pg_class rel on rel.oid = con.conrelid
join pg_namespace nsp on nsp.oid = rel.relnamespace
join target t on t.table_schema = nsp.nspname and t.table_name = rel.relname

union all

select
  'indexes' as section,
  jsonb_agg(
    jsonb_build_object(
      'index_name', idx.indexname,
      'definition', idx.indexdef
    )
    order by idx.indexname
  ) as definition
from pg_indexes idx
join target t on t.table_schema = idx.schemaname and t.table_name = idx.tablename

union all

select
  'rls_policies' as section,
  jsonb_agg(
    jsonb_build_object(
      'policy_name', pol.policyname,
      'command', pol.cmd,
      'roles', pol.roles,
      'using_expression', pol.qual,
      'check_expression', pol.with_check
    )
    order by pol.policyname
  ) as definition
from pg_policies pol
join target t on t.table_schema = pol.schemaname and t.table_name = pol.tablename

union all

select
  'triggers' as section,
  jsonb_agg(
    jsonb_build_object(
      'trigger_name', trg.tgname,
      'definition', pg_get_triggerdef(trg.oid, true)
    )
    order by trg.tgname
  ) as definition
from pg_trigger trg
join pg_class rel on rel.oid = trg.tgrelid
join pg_namespace nsp on nsp.oid = rel.relnamespace
join target t on t.table_schema = nsp.nspname and t.table_name = rel.relname
where not trg.tgisinternal

union all

select
  'table_options' as section,
  jsonb_build_object(
    'schema', nsp.nspname,
    'table', rel.relname,
    'rls_enabled', rel.relrowsecurity,
    'rls_forced', rel.relforcerowsecurity
  ) as definition
from pg_class rel
join pg_namespace nsp on nsp.oid = rel.relnamespace
join target t on t.table_schema = nsp.nspname and t.table_name = rel.relname
where rel.relkind in ('r', 'p')

union all

select
  'grants' as section,
  jsonb_agg(
    jsonb_build_object(
      'grantee', g.grantee,
      'privilege_type', g.privilege_type,
      'is_grantable', g.is_grantable
    )
    order by g.grantee, g.privilege_type
  ) as definition
from information_schema.table_privileges g
join target t on t.table_schema = g.table_schema and t.table_name = g.table_name;
