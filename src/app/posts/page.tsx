import Image from 'next/image'
import SingleImg from "../../../public/singleimgs/VoodooCoverArt.jpeg"
import SocialIcon from '../(socialicon)/socialicon';
import InstagramSVG from '../../../public/socialmedia/instagram.svg'

export default function PostsPage() {
    return (
        <main className='grid grid-cols-1 w-1/2 mx-auto'>
            <article className='mx-auto bg-emerald-900 p-2 mt-12 w-2/3 cursor-pointer rounded-md shadow-2xl'>
                <div>
                    <header className=''>Voodoo</header>
                    <button>Stream it</button>
                    <SocialIcon httpsUrl={"https://open.spotify.com/track/4rpJr9FHgUofV6HllNWmcq?si=b767fe87794c4293"} svgSrc={InstagramSVG} alt="My Spotify"/>
                </div>
                <Image src={SingleImg} alt={"test"} className='rounded-lg'/>
            </article>
            <article className='mx-auto bg-amber-600 p-2 mt-12 w-2/3 cursor-pointer'>
                <div>
                    <header>Voodoo</header>
                    <button>Stream it</button>
                </div>
                <Image src={SingleImg} alt={"test"} className='rounded-lg'/>
            </article>
            <article className='mx-auto bg-amber-600 p-2 mt-12 w-2/3 cursor-pointer'>
                <div>
                    <header>Voodoo</header>
                    <button>Stream it</button>
                </div>
                <Image src={SingleImg} alt={"test"} className='rounded-lg'/>
            </article>
        </main>
    );
  }
  