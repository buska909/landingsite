// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const posts = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
   
    return posts
  }

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    return(
        <p>Test: {id}</p>
    )
    // ...
  }
  