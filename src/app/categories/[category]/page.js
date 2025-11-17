export default async function Page({ params }) {
  const { category } = await params;

  return (
    <>
      <p> This is the articles related to {category}</p>
    </>
  );
}
