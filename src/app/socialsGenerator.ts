import { StaticImageData } from "next/image"
import InstagramSVG from "../../public/socialmedia/instagram.svg";
import TiktokPNG from "../../public/socialmedia/tiktok.png";
import SpotifySVG from "../../public/socialmedia/spotify.svg";
import DeezerSVG from "../../public/socialmedia/deezer.svg";
import AppleMusicSVG from "../../public/socialmedia/applemusic.svg";
import YoutubeMusicSVG from "../../public/socialmedia/youtubemusic.svg";
import { PostMetadata } from "./postsGenerator";


export function getAllSocials(): SocialInterface[] {
  return socials
}

export function getMusicServices():SocialInterface[] {
    return musicServices
  }

export function getSingleMusicServices(post:PostMetadata | undefined):SocialInterface[] {
   if(post) {
    return musicServices.map(musicService=>({
        id: musicService.id,
        url: post[musicService.id as keyof typeof post],
        img: musicService.img
    }));
   }
    return []
}


export interface SocialInterface {
    id:string,
    url: string,
    img: StaticImageData
}

enum SocialMediaUrls {
    Spotify="https://open.spotify.com/artist/4GAyKGJId5GRH8Toopnw4e?si=fLsaBQkSQu-z2Kl5sxugkg",
    Instagram='https://www.instagram.com/buska909/?utm_source=ig_web_button_share_sheet',
    Deezer='https://deezer.page.link/BpEoVirzdbWEAiyb9',
    AppleMusic='https://music.apple.com/fr/artist/buska/1764830063?l=en-GB',
    YoutubeMusic='https://youtube.com/channel/UCvLHGib-YXbLbNN3uZzIc0Q?feature=shared',
    TikTok='https://www.tiktok.com/@buska.music?_t=ZN-8t2B4nbqcEA&_r=1'
}

const musicServices: SocialInterface[] = [
    {
        id: "spotify",
        url: SocialMediaUrls.Spotify,
        img: SpotifySVG
    },
    {
        id: "deezer",
        url: SocialMediaUrls.Deezer,
        img: DeezerSVG
    },
    {
        id: "appleMusic",
        url: SocialMediaUrls.AppleMusic,
        img: AppleMusicSVG
    },
    {
        id: "youtubeMusic",
        url: SocialMediaUrls.YoutubeMusic,
        img: YoutubeMusicSVG
    }
]


const socials:SocialInterface[] = [
    ...musicServices,
    {
        id: "instagram",
        url: SocialMediaUrls.Instagram,
        img: InstagramSVG
    },
    {
        id: "tikTok",
        url: SocialMediaUrls.TikTok,
        img: TiktokPNG
    }
]
