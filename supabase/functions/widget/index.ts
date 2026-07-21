import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
    try {
        const url = new URL(req.url);
        const slug = url.searchParams.get("slug");
        if (!slug) return new Response("missing slug", { status: 400 });

        const supabase = createClient(
            Deno.env.get("SUPABASE_URL")!,
            Deno.env.get("SUPABASE_ANON_KEY")! // safe for public reads; RLS protects data
        );

        const { data, error } = await supabase
            .from("widgets")
            .select("type, config, version, updated_at")
            .eq("slug", slug)
            .eq("published", true)
            .limit(1)
            .maybeSingle();

        if (error || !data) return new Response("not found", { status: 404 });

        return new Response(JSON.stringify(data), {
            headers: {
                "content-type": "application/json",
                "cache-control": "public, max-age=15, s-maxage=300, stale-while-revalidate=600"
            }
        });
    } catch {
        return new Response("error", { status: 500 });
    }
});
