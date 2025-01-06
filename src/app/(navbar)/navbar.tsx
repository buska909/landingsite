import SocialIcon from "../(socialicon)/socialicon";
import TitleImg from "../../../public/title.png";
import InstagramSVG from "../../../public/socialmedia/instagram.svg";
import SpotifySVG from "../../../public/socialmedia/spotify.svg";
import DeezerSVG from "../../../public/socialmedia/deezer.svg";
import AppleMusicSVG from "../../../public/socialmedia/applemusic.svg";
import YoutubeMusicSVG from "../../../public/socialmedia/youtubemusic.svg";
import ShareButton from "../shareButton";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav id="main-nav-bar" className="pt-3 w-full">
        <Link href="/">
            <Image className="mx-auto w-1/6 cursor-pointer" src={TitleImg} alt="Buska"/>
        </Link>
        <ShareButton title="Buska Landing Site share button" shareText="share my website!" url="https://www.google.com" alt="Buska Landing Site share button"/>
        <div className="grid grid-cols-5 mt-4 mx-auto w-1/4">
            <SocialIcon httpsUrl={SocialMediaUrls.Spotify} svgSrc={SpotifySVG} alt="My Spotify"/>
            <SocialIcon httpsUrl={SocialMediaUrls.Deezer} svgSrc={DeezerSVG} alt="My Deezer"/>
            <SocialIcon httpsUrl={SocialMediaUrls.Instagram} svgSrc={InstagramSVG} alt="My insta"/>
            <SocialIcon httpsUrl={SocialMediaUrls.AppleMusic} svgSrc={AppleMusicSVG} alt="My Apple Music"/>
            <SocialIcon httpsUrl={SocialMediaUrls.YoutubeMusic} svgSrc={YoutubeMusicSVG} alt="My Youtube"/>
        </div>
    </nav>
  );
}

enum SocialMediaUrls {
    Spotify="https://open.spotify.com/artist/4GAyKGJId5GRH8Toopnw4e?si=fLsaBQkSQu-z2Kl5sxugkg",
    Instagram='https://www.instagram.com/buska909/?utm_source=ig_web_button_share_sheet',
    Deezer='https://deezer.page.link/BpEoVirzdbWEAiyb9',
    AppleMusic='https://music.apple.com/fr/artist/buska/1764830063?l=en-GB',
    YoutubeMusic='https://youtube.com/channel/UCvLHGib-YXbLbNN3uZzIc0Q?feature=shared'
}
