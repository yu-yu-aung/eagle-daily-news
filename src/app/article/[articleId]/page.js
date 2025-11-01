export default async function Page({ params }) {
  const { articleId } = await params;
  return <div>This is detail of the article {id}</div>;
}
