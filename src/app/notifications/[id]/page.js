export default async function Page({ params }) {
  const { id } = await params;
  return <div>You got a new reply on your comment! {id}</div>;
}
