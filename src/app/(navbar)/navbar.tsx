import SocialIcon from "../(socialicon)/socialicon";
import TitleImg from "../../../public/title.png";
import ShareButton from "../shareButton";
import Link from "next/link";
import Image from "next/image";
import { getAllSocials } from "../socialsGenerator";

export default function NavBar() {
  const socials = getAllSocials();
  return (
    <nav id="main-nav-bar" className="pt-3 w-full">
        <Link href="/">
            <Image className="mx-auto w-5/12 md:w-1/4 cursor-pointer" src={TitleImg} alt="Buska"/>
        </Link>
        <ShareButton title="Buska Landing Site share button" shareText="share my website!" url="https://buska909.github.io/landingsite/" alt="Buska Landing Site share button"/>
        <div className="grid grid-cols-6 mt-4 mx-auto w-10/12 md:w-1/2">
        {
          socials.map(social=>
            <SocialIcon key={social.id} httpsUrl={social.url} svgSrc={social.img} alt={social.id}/>
            )
        }
        </div>
    </nav>
  );
}
