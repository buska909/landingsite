import Image from 'next/image'
import SingleImg1 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import SingleImg2 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import SingleImg3 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import SingleImg4 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import Link from 'next/link';

export default function PostsPage() {
    return (
        <main className='grid grid-cols-1 w-full mx-auto'>
            <h2 className='text-center text-2xl m-6'>New music out:</h2>
            <div className='grid grid-cols-2 w-1/2 mx-auto gap-x-2 gap-y-8'>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg1} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/1`} className='text-center'>Stream it</Link>
                  </div>
              </article>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg2} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/2`} className='text-center'>Stream it</Link>
                  </div>
              </article>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg3} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/3`} className='text-center'>Stream it</Link>
                  </div>
              </article>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg4} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/4`} className='text-center'>Stream it</Link>
                  </div>
              </article>
            </div>
        </main>
    );
  }