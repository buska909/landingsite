const LeftContentType = Object.freeze({
    SVG:   Symbol("svg"),
});


const LINKS = [
    {
        id: 1,
        text: "Instagram",
        shareContent: {
            title: 'Check this out insta!',
            text: 'Here is something I wanted to share with you.',
            url: 'https://www.instagram.com/buska909/?utm_source=ig_web_button_share_sheet',
        },
        leftContent: {
            type: LeftContentType.SVG,
            viewBox:"0 0 448 512",
            pathD:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        }
    },
    {
        id: 2,
        text: "Spotify",
        shareContent: {
            title: 'Check this out spot!',
            text: 'Here is something I wanted to share with you.',
            url: 'https://open.spotify.com/artist/4GAyKGJId5GRH8Toopnw4e?si=fLsaBQkSQu-z2Kl5sxugkg',
        },
        leftContent: {
            type: LeftContentType.SVG,
            viewBox:"0 0 496 512",
            pathD:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"
        }
    },
    {
        id: 3,
        text: "Deezer",
        shareContent: {
            title: 'Check this out!',
            text: 'Here is something I wanted to share with you.',
            url: 'https://deezer.page.link/BpEoVirzdbWEAiyb9',
        },
        leftContent: {
            type: LeftContentType.SVG,
            viewBox:"0 0 576 512",
            pathD:"M451.5 244.7H576V172H451.5zm0-173.9v72.7H576V70.8zm0 275.1H576V273.2H451.5zM0 447.1H124.5V374.4H0zm150.5 0H275V374.4H150.5zm150.5 0H425.5V374.4H301zm150.5 0H576V374.4H451.5zM301 345.9H425.5V273.2H301zm-150.5 0H275V273.2H150.5zm0-101.2H275V172H150.5z"
        }
    },
    {
        id: 4,
        text: "Apple Music",
        shareContent: {
            title: 'Check this out!',
            text: 'Here is something I wanted to share with you.',
            url: 'https://music.apple.com/fr/artist/buska/1764830063?l=en-GB',
        },
        leftContent: {
            type: LeftContentType.SVG,
            viewBox:"0 0 512 512",
            pathD:"M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"
        }
    },
    {
        id: 5,
        text: "Youtube Music",
        shareContent: {
            title: 'Check this out!',
            text: 'Here is something I wanted to share with you.',
            url: 'https://youtube.com/channel/UCvLHGib-YXbLbNN3uZzIc0Q?feature=shared',
        },
        leftContent: {
            type: LeftContentType.SVG,
            viewBox:"0 0 576 512",
            pathD:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
        }
    }
]

function shareOnClick(shareContent) {
    if (navigator.share) {
      navigator.share(shareContent)
        .then(() => console.log('Content shared successfully!'))
        .catch((error) => {
          console.error('Error sharing:', error);
        });
    } else {
      alert('Your browser does not support the Web Share API.');
    }
  }

function loadLinks(){
    let template = document.querySelector('#social-template');
    let templateContent = template.content;
    LINKS.forEach(link => {
        let linkHtml = document.importNode(templateContent, true);
        linkHtml.querySelector('.social-link').textContent = link.text;
        linkHtml.querySelector('.social-link').href = link.shareContent.url;
        if(link.leftContent.type == LeftContentType.SVG){
            linkHtml.querySelector('.left-content').setAttribute("viewBox", link.leftContent.viewBox);
            linkHtml.querySelector('.left-content path').setAttribute('d', link.leftContent.pathD);
        }
        const linkShareFunction = () => {
            shareOnClick(link.shareContent);
        }
        linkHtml.querySelector('.share-button').onclick = linkShareFunction;

        document.querySelector('#socials-list').appendChild(linkHtml);
    });

}
loadLinks();    

//TODO: append all in one go (Document Fragemnt?)
//TODO: versionning
//TODO: img support for left content
//TODO: share linktree
//TODO: Put socials at the top, title at the bottom