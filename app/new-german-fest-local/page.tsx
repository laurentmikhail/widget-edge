export default function NewGermanFestLocal() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 font-sans">
      <h1 className="mb-2 text-3xl font-semibold text-zinc-900">
        new-german-fest local widget test
      </h1>
      <p className="mb-6 text-zinc-600">
        Loads the local widget loader and fetches the widget config through the local API.
      </p>
      <div className="min-h-[520px] rounded-lg border border-zinc-300 bg-white p-6">
        <script
          defer
          src="/loader.v1.js?t=local"
          data-widget-id="new-german-fest"
        />
      </div>
    </main>
  );
}
