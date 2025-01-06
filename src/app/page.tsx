import Image from 'next/image'
import SingleImg from "../../public/singleimgs/VoodooCoverArt.jpeg"
import Link from 'next/link';

export default function PostsPage() {
    return (
        <main className='grid grid-cols-1 w-full mx-auto'>
            <h2 className='text-center text-2xl m-6'>New music out:</h2>
            <div className='grid grid-cols-2 w-1/2 mx-auto gap-x-2 gap-y-8'>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/${"eee"}`} className='text-center'>Stream it</Link>
                  </div>
              </article>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/${"eee"}`} className='text-center'>Stream it</Link>
                  </div>
              </article>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/${"eee"}`} className='text-center'>Stream it</Link>
                  </div>
              </article>
              <article className='pb-2 w-72 cursor-pointer rounded-md shadow-2xl'>
                  <Image src={SingleImg} alt={"test"} className='rounded-t-md'/>
                  <div className='grid grid-cols-1 mx-auto'>
                      <header className='text-xl text-center'>Voodoo</header>
                      <Link href={`/posts/${"eee"}`} className='text-center'>Stream it</Link>
                  </div>
              </article>
            </div>
        </main>
    );
  }