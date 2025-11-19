export async function GET() {
  const baseUrl = "https://example.com";
  const categories = [
    "politics",
    "technology",
    "sports",
    "general",
    "nation",
    "business",
    "entertainment",
    "science",
    "health",
  ];

  const articles = ["article-1", "article-2", "article-3"];

  let urls = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
      </url>
  `;

  categories.forEach((category) => {
    urls += `
      <url>
        <loc>${baseUrl}/categories/${category}</loc>
      </url>
    `;
  });

  articles.forEach((article) => {
    urls += `
      <url>
        <loc>${baseUrl}/article/${article}</loc>
      </url>
    `;
  });

  urls += "</urlset>";

  return new Response(urls, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
