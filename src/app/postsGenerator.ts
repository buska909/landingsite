
import SingleImg1 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import SingleImg2 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import SingleImg3 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import SingleImg4 from "../../public/publishedimgs/VoodooCoverArt.jpeg"
import { StaticImageData } from "next/image"


export interface PostMetadata { id: string, title: string, spotify: string, deezer: string, youtubeMusic: string, appleMusic: string}

export interface PostCharacteristics extends PostMetadata { img:StaticImageData }

export function getAllPosts(): PostCharacteristics[] {
  return posts
}

export function getPost(id:string):PostCharacteristics | undefined {
  return getAllPosts().find((post) => post.id == id);
}

const posts = [
    { 
      id: '1',
      title: "Voodoo",
      spotify:'https://open.spotify.com/album/2nZsavPUOIB9Ds5GmGLseP',
      deezer: 'https://www.deezer.com/album/634241571',
      youtubeMusic: 'https://youtu.be/5F74teac-cE?feature=shared',
      appleMusic: 'https://music.apple.com/us/album/voodoo-single/1765018284?uo=4&app=music&at=1001lry3&ct=dashboard',
      img: SingleImg1
    }, 
    { 
      id: '2',
      title: "Voodoo",
      spotify:'https://open.spotify.com/album/2nZsavPUOIB9Ds5GmGLseP',
      deezer: 'https://www.deezer.com/album/634241571',
      youtubeMusic: 'https://youtu.be/5F74teac-cE?feature=shared',
      appleMusic: 'https://music.apple.com/us/album/voodoo-single/1765018284?uo=4&app=music&at=1001lry3&ct=dashboard',
      img: SingleImg2
    }, 
    { 
      id: '3',
      title: "Voodoo",
      spotify:'https://open.spotify.com/album/2nZsavPUOIB9Ds5GmGLseP',
      deezer: 'https://www.deezer.com/album/634241571',
      youtubeMusic: 'https://youtu.be/5F74teac-cE?feature=shared',
      appleMusic: 'https://music.apple.com/us/album/voodoo-single/1765018284?uo=4&app=music&at=1001lry3&ct=dashboard',
      img: SingleImg3
    }, 
    { 
      id: '4',
      title: "Voodoo",
      spotify:'https://open.spotify.com/album/2nZsavPUOIB9Ds5GmGLseP',
      deezer: 'https://www.deezer.com/album/634241571',
      youtubeMusic: 'https://youtu.be/5F74teac-cE?feature=shared',
      appleMusic: 'https://music.apple.com/us/album/voodoo-single/1765018284?uo=4&app=music&at=1001lry3&ct=dashboard',
      img: SingleImg4
    }
  ]