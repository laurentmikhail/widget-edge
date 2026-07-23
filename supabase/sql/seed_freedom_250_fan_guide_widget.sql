insert into public.widgets (slug, type, name, published, version, config)
values (
  'freedom-250-fan-guide',
  'custom-template',
  'Freedom 250 Fan Guide Banner',
  true,
  1,
  '{
    "template": "freedom-fan-guide-banner",
    "settings": {
      "eyebrow": "KNOW BEFORE YOU GO",
      "title": "The Digital Fan Guide is live!",
      "description": "Build your race-day itinerary with interactive maps, guides & schedules - right at your fingertips.",
      "ctaText": "Get Started",
      "ctaUrl": "https://www.freedom250gp.com/",
      "imageUrl": "https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250/fan-guide-map.png",
      "imageAlt": "Course map",
      "liveLabel": "Live",
      "fonts": {
        "baskervville": "https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250/Baskervville-Variable.ttf",
        "baskervvilleItalic": "https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250/Baskervville-Italic-Variable.ttf",
        "eurostile": "https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250/Eurostile-Oblique.otf",
        "eurostileBold": "https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250/Eurostile-BoldOblique.otf",
        "vintageGoods": "https://pibfkswjeidelzxxvzsg.supabase.co/storage/v1/object/public/widget-assets/freedom-250/VintageGoods.otf"
      }
    }
  }'::jsonb
)
on conflict (slug) do update
set
  type = excluded.type,
  name = excluded.name,
  published = excluded.published,
  version = public.widgets.version + 1,
  config = excluded.config,
  updated_at = now();
