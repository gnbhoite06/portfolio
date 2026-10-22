// Serves the latest public posts from the Substack, cached at Vercel's edge for an hour.
const FEED = "https://gandharvbhoite.substack.com/api/v1/archive?sort=new&limit=20";
const SKIP_SLUGS = new Set(["welcome-to-the-room"]);

type SubstackPost = {
  slug: string;
  title: string;
  subtitle: string | null;
  post_date: string;
  canonical_url: string;
  type: string;
  audience: string;
};

export async function GET() {
  try {
    const res = await fetch(FEED, { headers: { "User-Agent": "Mozilla/5.0 (portfolio feed)" } });
    if (!res.ok) throw new Error(`Substack responded ${res.status}`);
    const data = (await res.json()) as SubstackPost[];

    const posts = data
      .filter((p) => p.type === "newsletter" && p.audience === "everyone" && !SKIP_SLUGS.has(p.slug))
      .map((p) => ({
        date: p.post_date,
        title: p.title,
        blurb: p.subtitle ?? "",
        href: p.canonical_url,
      }));

    return Response.json(posts, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    });
  } catch (err) {
    return Response.json({ error: String(err) }, { status: 502, headers: { "Cache-Control": "no-store" } });
  }
}
