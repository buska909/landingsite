"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'
import ShareSVG from "../../public/share.svg";

export default function ShareButton({ title, shareText, url, alt  }:ShareProps) {
    const [isShareSupported, setIsShareSupported] = useState(false);

    useEffect(() => {
        setIsShareSupported(typeof navigator !== "undefined" && !!navigator.share);
    }, []);

    function sharePage() {
        const shareData = { title, text: shareText, url };
        if (isShareSupported) {
            navigator.share(shareData)
                .then(() => console.log('Content shared successfully!'))
                .catch((error) => {
                    if (error.name !== 'AbortError') {
                        console.error('Error sharing content:', error);
                    }
                    // Silently ignore the AbortError (user canceled the share)
                });
        } else {
            console.log('Sharing not supported');
        }
    }
  return (
    <Image src={ShareSVG} alt={alt} width={15} height={15} className="hover:scale-110 duration-200 mx-auto" onClick={sharePage}/>
  );
}



interface ShareData {
    title: string;
    shareText: string;
    url: string; // https needed
}

interface ShareProps extends ShareData {
    alt: string;
}