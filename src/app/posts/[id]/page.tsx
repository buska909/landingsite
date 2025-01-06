export default async function PostPage({ params }: { params: { id: string } }) {
    return (
        <p>this is my post page: {params.id}</p>
    );
  }
  