

export default async function Page({params}){
  const {category} = await params; 

  return <div>
    This is your articles related to {category}! 
  </div>
}