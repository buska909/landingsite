
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';

export default function SocialIcon({ httpsUrl, svgSrc, alt }:SocialMediaLinkData) {
  return (
        <Link
            href={httpsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='flex w-full h-full justify-center'
            >
              <Image src={svgSrc} alt={alt} className='w-8 md:w-12 table-cell align-middle m-auto hover:scale-110 duration-200'/>
        </Link>
  );
}
interface SocialMediaLinkData {
    httpsUrl: string;
    svgSrc: string|StaticImageData;
    alt: string;
}