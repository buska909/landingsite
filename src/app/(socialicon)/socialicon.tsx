
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

export default function SocialIcon({ httpsUrl, svgSrc, alt }:SocialMediaLinkData) {
  return (
        <Link
            href={httpsUrl}
            target="_blank"
            rel="noopener noreferrer"
            >
              <Image src={svgSrc} alt={alt} width={30} height={30} className='m-auto hover:scale-110 duration-200'/>
        </Link>
  );
}
interface SocialMediaLinkData {
    httpsUrl: string;
    svgSrc: string|StaticImageData;
    alt: string;
}