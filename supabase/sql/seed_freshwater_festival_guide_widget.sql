insert into public.widgets (slug, type, name, published, version, config)
values (
  'freshwater-festival-guide',
  'custom-template',
  'Freshwater Festival Guide Banner',
  true,
  1,
  '{
  "template": "freshwater-guide-banner",
  "settings": {
    "title": "The Festival Guide is live",
    "eyebrow": "Plan your festival day",
    "liveLabel": "Now live",
    "description": "Seven wine regions, three stages, three food zones \u2014 find it all on the map",
    "mobileDescription": "Map, schedule & more",
    "ctaText": "Open the Guide",
    "ctaUrl": "https://map.visitmke.org/?event=visit-milwaukee&area=freshwater-food--wine-festival&floor=area-12-level-1&view=map&in-map=event",
    "imageUrl": "guide.png",
    "imageAlt": "Freshwater Festival Guide showing restaurants, the festival map and schedule",
    "maxWidth": 1180
  }
}'::jsonb
)
on conflict (slug) do nothing;
