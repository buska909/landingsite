import SocialIcon from "../(socialicon)/socialicon";
import InstagramSVG from "../../../public/socialmedia/instagram.svg";
import ShareButton from "../shareButton";

export default function NavBar() {
  return (
    <nav id="main-nav-bar" className="pt-3 text-blue-600">
        <h1 className="text-center text-4xl">Buska</h1>
        <ShareButton title="Buska Landing Site share button" shareText="share my website!" url="https://www.google.com" alt="Buska Landing Site share button" className=""/>
        <div className="grid grid-cols-5 mt-1 mx-auto w-1/4">
            <SocialIcon httpsUrl={SocialMediaUrls.Spotify} svgSrc={InstagramSVG} alt="My Spotify"/>
            <SocialIcon httpsUrl={SocialMediaUrls.Instagram} svgSrc={InstagramSVG} alt="My insta"/>
            <SocialIcon httpsUrl={SocialMediaUrls.Deezer} svgSrc={InstagramSVG} alt="My Deezer"/>
            <SocialIcon httpsUrl={SocialMediaUrls.AppleMusic} svgSrc={InstagramSVG} alt="My Apple Music"/>
            <SocialIcon httpsUrl={SocialMediaUrls.YoutubeMusic} svgSrc={InstagramSVG} alt="My Youtube"/>
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
