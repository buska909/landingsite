import Image from 'next/image'
import Link from 'next/link';
import { getAllPosts } from './postsGenerator';


export default function PostsPage() {
    const posts = getAllPosts();
    return (
        <main className='grid grid-cols-1 w-full mx-auto'>
            <h2 className='text-center text-2xl m-6'>New music out:</h2>
            <div className='grid grid-cols-2 w-10/12 md:w-1/2 mx-auto gap-x-3 gap-y-6'>
                {
                    posts.map(post => 
                        <Link key={post.id} href={`/posts/${post.id}`} className='text-center'>
                            <article className='pb-2 cursor-pointer rounded-lg shadow-2xl hover:text-black hover:bg-white duration-200'>
                                <Image src={post.img} alt={post.title} className='rounded-t-md'/>
                                <div className='grid grid-cols-1 mx-auto'>
                                    <header className='text-xl'>{post.title}</header>
                                </div>
                            </article>
                        </Link>
                        )
                }
            </div>
        </main>
    );
  }