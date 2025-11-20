export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") || "general";
  const q = searchParams.get("q") || null;

  let apiURL = `https://gnews.io/api/v4/top-headlines?apikey=${process.env.NEXT_PUBLIC_GNEWS_KEY}&lang=en&max=10`;

  if (q) apiURL += `&q=${q}`;
  if (category) apiURL += `&category=${category}&country=us`;

  const res = await fetch(apiURL);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
