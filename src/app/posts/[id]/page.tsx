import { getPost, getAllPosts } from "@/app/postsGenerator";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/app/(socialicon)/socialicon";
import { getSingleMusicServices } from "@/app/socialsGenerator";

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
  id: post.id,
}));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params;
  const post = getPost(id);
  const socials = getSingleMusicServices(post);
  return (
    <>
      {post && (
        <div className="w-10/12 md:w-1/4 mx-auto mt-10 pb-2 cursor-pointer rounded-lg shadow-2xl">
          <Image className="w-full" src={post.img} alt={post.title}></Image>
          <div className="text-center">
            <h3 className="text-2xl">Buska - {post.title || "Untitled"}</h3>
            <h4 className="text-l">Available on all streaming platforms:</h4>
            <br/>
            <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 gap-y-2">
              { socials &&(
                socials.map(social => 
                  <div key={social.id} className="grid grid-cols-2 text-l align-center">
                    <SocialIcon httpsUrl={social.url} svgSrc={social.img} alt="My Spotify"/>
                    <div className="flex my-2" >
                      <Link href={social.url} target="_blank" rel="noopener noreferrer" className="m-auto p-2 bg-white rounded">
                        <span className="custom-text-gradient inline">Start streaming</span>
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}
      <br/>
    </>
    
  );
}
