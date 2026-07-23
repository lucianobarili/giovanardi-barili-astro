import type { APIRoute } from "astro";

// Mismo flag que BaseLayout.astro: sin PUBLIC_ALLOW_INDEXING=true, bloquea
// todo el crawling. Ver nota en BaseLayout.astro.
export const GET: APIRoute = ({ site }) => {
  const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === "true";

  const body = allowIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site)}\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
