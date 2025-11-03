export default async function Page({ params }) {
  const { latestArticleId } = await params;
  return <div>This is detail of the article {latestArticleId}</div>;
}
