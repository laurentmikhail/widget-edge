create table if not exists public.widgets (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  owner_id uuid,
  name text,
  type text default 'button'::text,
  published boolean not null default false,
  version integer not null default 1,
  config jsonb not null,
  updated_at timestamp with time zone not null default now(),
  created_at timestamp with time zone not null default now()
);

create index if not exists widgets_published_slug_idx
  on public.widgets using btree (slug)
  where published = true;

alter table public.widgets enable row level security;

drop policy if exists "Allow Insert" on public.widgets;
create policy "Allow Insert"
  on public.widgets
  for insert
  to public
  with check (true);

drop policy if exists "Enable insert for authenticated users only" on public.widgets;
create policy "Enable insert for authenticated users only"
  on public.widgets
  for insert
  to authenticated
  with check (true);

drop policy if exists "public read published" on public.widgets;
create policy "public read published"
  on public.widgets
  for select
  to anon
  using (published = true);

drop policy if exists "widgets owner read" on public.widgets;
create policy "widgets owner read"
  on public.widgets
  for select
  to authenticated
  using ((select auth.uid()) = owner_id);

grant delete, insert, references, select, trigger, truncate, update
  on table public.widgets
  to anon;

grant delete, insert, references, select, trigger, truncate, update
  on table public.widgets
  to authenticated;

grant delete, insert, references, select, trigger, truncate, update
  on table public.widgets
  to service_role;
