import Script from "next/script";

export default function Freedom250Local() {
  return (
    <main className="min-h-screen bg-[#eef0f4] px-5 py-10 font-sans text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-3xl font-semibold">Freedom 250 fan guide widget</h1>
        <p className="text-zinc-600">
          Local v3 loader preview using the clean custom template renderer.
        </p>
      </div>
      <Script
        src="/loader.v3.js?t=local"
        strategy="afterInteractive"
        data-demo="freedom-fan-guide-banner"
      />
    </main>
  );
}
