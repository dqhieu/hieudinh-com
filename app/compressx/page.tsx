'use client'

// import { Metadata } from 'next'
import { Tweet } from 'react-tweet'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import LemonSqueezyLogoLightMode from '/src/images/lemon_squeezy_black.svg'
import LemonSqueezyLogoDarkMode from '/src/images/lemon_squeezy.svg'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import CountUp from 'react-countup'
import Confetti from 'react-dom-confetti';

// export const metadata: Metadata = {
//   openGraph: {
//     title: 'CompressX',
//     description: 'Ultra video compression',
//     url: 'https://hieudinh.com/compressx',
//     siteName: 'CompressX',
//     images: [
//       {
//         url: 'https://hieudinh.com/compressx/opengraph-image.png',
//         width: 1200,
//         height: 627,
//       }
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'CompressX',
//     description: 'Ultra video compression',
//     images: ['https://hieudinh.com/compressx/twitter-image.png'],
//   },
// }

const LemonSqueezyLogo = () => {
    return (
      <picture>
        <source srcSet={LemonSqueezyLogoLightMode.src} media="(prefers-color-scheme: dark)" />
        <Image className="px-2" src={LemonSqueezyLogoDarkMode} alt="LemonSqueezy logo" width={212} height={28}/>
      </picture>
  );
};

const VideoPlayer = () => {
  return (
    <video className="rounded-xl shadow-2xl w-full" autoPlay muted loop playsInline>
      <source src="/compressx/demo.mp4" type="video/mp4" />
    </video>
  );
};

const LemonSqueezySubscribeForm = () => {
  return (
    <div className="group relative py-8 bg-white dark:bg-slate-950">
      <div>
        <form action="https://hieudinh.lemonsqueezy.com/email-subscribe/external" method="post" className="flex flex-col items-center">
          <p className="mb-2 text-md font-medium text-black dark:text-white">💌 Get notified on new features and updates</p>
          <div className="flex flex-row">
            <input
              className="block w-full appearance-none rounded-lg 
              border border-gray-200 bg-white px-2 text-gray-900 
              placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-yellow-400 
              text-sm"
              type="email"
              name="email" 
              id="email"
              placeholder="you@gmail.com"
              required
            />
            <button className="
            inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold 
            ml-2 flex-none
            text-sm text-gray-100 dark:text-black
            outline-2 outline-offset-2 
            bg-black dark:bg-slate-100 group
            transition-shadow duration-500 ease-in-out shadow-lg hover:shadow-yellow-400
            " 
            type="submit">
              <span className="">Subscribe</span>
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">No spams. Only product updates.</p>
        </form>
        
      </div>
    </div>
  );
};

const GetItOnLemonSqueezy =() => {
  return (
    <div id="download">
      <a className="inline-flex justify-center mt-8 
      rounded-full py-2 px-6 
      text-xl text-gray-100 dark:text-black py-2
      outline-2 outline-offset-2 
      bg-black dark:bg-slate-100 group
      transition-shadow duration-500 ease-in-out shadow-lg hover:shadow-yellow-400"
      href='https://hieudinh.lemonsqueezy.com/checkout/buy/572b7285-ab58-48b5-a919-036c7787c30b'
      >
        <span className="">Buy it on</span>
        <LemonSqueezyLogo/>
      </a>
    </div>
  )
}

const BuyNowButton =() => {
  return (
    <div id="download" className='flex items-center mt-8'>
      <a className="inline-flex justify-center 
      rounded-full  px-6 
      text-lg font-medium text-gray-100 dark:text-black py-2
      outline-2 outline-offset-2 
      bg-black dark:bg-slate-100 group
      transition-shadow duration-500 ease-in-out shadow-lg hover:shadow-yellow-400"
      href='https://hieudinh.lemonsqueezy.com/checkout/buy/572b7285-ab58-48b5-a919-036c7787c30b'
      >
        <span className="">Buy now</span>
      </a>
      <a className="inline-flex px-4 
      text-sm text-gray-500 dark:text-slate-400"
      href='https://hieudinh.lemonsqueezy.com/'
      >
        <span className="no-underline hover:underline">Alternative link</span>  
      </a>
      
    </div>
  )
}

const JoinCreators =({ users }: { users: string }) => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="
          mx-auto flex max-w-2xl flex-col gap-8 bg-slate-100 dark:bg-white/5 px-6 py-8 
          border dark:border-slate-700 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row 
          lg:items-center lg:py-10 xl:gap-x-8 xl:px-8">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-center text-2xl text-black dark:text-white font-semibold">Boost your productivity, today 🚀</h2>
              <p className="mt-2 text-lg text-center leading-8  text-gray-700 dark:text-slate-300">
                Join {users} users and enjoy a smaller file size with similar video quality!
              </p>
              <BuyNowButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductOfTheDay = () => {
  return (
    <div className="flex justify-center items-center"> 
      <a href='https://www.producthunt.com/posts/compressx'>
        <svg  
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 122 37" 
        style={{width: "100%", height: "100%"}}>
          <path fill="#4B587C" d="M104.953 36.286c-4.22 1.634-5.936.086-5.936-.891 1.495-.126 5.067-.331 5.936.891m5.356-1.336a5.486 5.486 0 0 1-7.083-.497c1.44-.4 5.372-.874 7.083.497m-7.139-3.176c.16 2.033-1.922 3.176-4.17 3.341.41-2.045 2.509-2.958 4.17-3.341m4.032-1.874c.238.869-.089 3.228-3.323 4.164.139-1.593.986-3.667 3.323-4.164m6.413 2.365a5.005 5.005 0 0 1-6.385.571c1.296-.668 4.408-1.57 6.385-.571m-3.417-4.706c.443.856.537 3.295-2.326 4.763-.166-1.57.465-4.255 2.326-4.763m7.083.948a4.389 4.389 0 0 1-2.657 2.217 4.243 4.243 0 0 1-3.39-.44c1.805-1.697 4.685-2.348 6.047-1.777m-4.28-4.547c1.284 2.24-.073 4.798-1.485 5.849-.628-2.082-.052-4.351 1.484-5.849Zm6.662-.097c.155 3.479-3.478 3.29-5.184 3.313.537-.731 3.522-3.381 5.184-3.313m-4.48-3.25c.675.743 1.688 3.599-.555 5.929-.703-1.685-.858-4.272.554-5.929Zm6.385-1.542c.116 2.81-2.249 4.232-4.53 4.21.686-1.354 2.52-3.964 4.53-4.21m-4.785-1.936c1.512.89 1.34 3.764.448 5.26-1.002-1.393-1.75-3.124-.448-5.26m4.884-2.633c.748 2.559-1.45 4.29-2.769 4.438.338-1.222.781-3.387 2.77-4.438Zm-4.607-.851c1.667.835 2.457 2.832 1.833 4.632-1.163-.937-2.564-2.919-1.833-4.632m4.685-3.096c1.03 3.113-1.335 4.13-2.215 4.38.105-1.324.947-3.963 2.215-4.38m-4.619-.817c.676.195 2.603 1.777 2.254 4.61-1.268-.714-2.808-2.074-2.254-4.61m3.921-3.9c1.152 3.826-.77 5.397-1.401 5.71-.1-1.21-.222-4.037 1.401-5.71m-4.264.096c1.207.337 2.73 2.553 2.658 4.684-1.196-.548-2.985-2.827-2.658-4.684m.36-5.934c2.802 2.896 3.195 5.18 2.376 7.996-1.269-1.142-2.282-4.569-2.376-7.996M17.047 36.286c4.22 1.634 5.936.086 5.936-.891-1.495-.126-5.067-.331-5.936.891M11.69 34.95a5.486 5.486 0 0 0 7.083-.497c-1.44-.4-5.372-.874-7.083.497m7.139-3.176c-.16 2.033 1.922 3.176 4.17 3.341-.41-2.045-2.509-2.958-4.17-3.341M14.798 29.9c-.238.869.089 3.228 3.323 4.164-.139-1.593-.986-3.667-3.323-4.164m-6.413 2.365a5.005 5.005 0 0 0 6.385.571c-1.296-.668-4.408-1.57-6.385-.571m3.417-4.706c-.443.856-.537 3.295 2.326 4.763.166-1.57-.465-4.255-2.326-4.763m-7.083.948a4.389 4.389 0 0 0 2.657 2.217 4.243 4.243 0 0 0 3.39-.44c-1.805-1.697-4.685-2.348-6.047-1.777m4.28-4.547c-1.284 2.24.073 4.798 1.485 5.849.628-2.082.052-4.351-1.484-5.849Zm-6.662-.097c-.155 3.479 3.478 3.29 5.184 3.313-.537-.731-3.522-3.381-5.184-3.313m4.48-3.25c-.675.743-1.688 3.599.555 5.929.703-1.685.858-4.272-.554-5.929ZM.433 19.071c-.116 2.81 2.249 4.232 4.53 4.21-.686-1.354-2.52-3.964-4.53-4.21m4.785-1.936c-1.512.89-1.34 3.764-.448 5.26 1.002-1.393 1.75-3.124.448-5.26M.333 14.502c-.748 2.559 1.45 4.29 2.769 4.438-.338-1.222-.781-3.387-2.77-4.438Zm4.607-.851c-1.667.835-2.457 2.832-1.833 4.632 1.163-.937 2.564-2.919 1.833-4.632M.255 10.555c-1.03 3.113 1.335 4.13 2.215 4.38-.105-1.324-.947-3.963-2.215-4.38m4.619-.817c-.676.195-2.603 1.777-2.254 4.61 1.268-.714 2.808-2.074 2.254-4.61m-3.921-3.9c-1.152 3.826.77 5.397 1.401 5.71.1-1.21.222-4.037-1.401-5.71m4.264.096c-1.207.337-2.73 2.553-2.658 4.684 1.196-.548 2.985-2.827 2.658-4.684M4.857 0C2.055 2.896 1.662 5.18 2.481 7.996 3.75 6.854 4.763 3.427 4.857 0m49.105 35c.162 0 .288-.108.288-.27v-1.782a.284.284 0 0 0-.288-.288h-4.41l3.006-3.06c.486-.504 1.674-1.62 1.674-3.492 0-2.214-1.71-3.852-4.176-3.852-1.962 0-3.204 1.026-3.924 2.07-.09.108-.09.27.036.396l1.242 1.242c.162.144.27.162.414 0 .468-.612 1.026-1.188 1.998-1.188 1.044 0 1.728.648 1.728 1.584 0 1.116-.918 1.962-1.422 2.466l-3.744 3.798c-.09.126-.126.216-.126.342v1.764c0 .162.126.27.288.27zm4.572 0c.162 0 .288-.108.288-.27v-4.464c0-1.17.576-1.782 1.53-1.782.972 0 1.476.612 1.476 1.782v4.464c0 .162.126.27.288.27h2.178c.162 0 .288-.108.288-.27v-5.112c0-2.304-1.35-3.654-3.186-3.654-1.26 0-2.07.63-2.574 1.53l-.09-1.026c0-.216-.108-.288-.27-.288h-2.124c-.162 0-.27.108-.27.27v8.28c0 .162.108.27.27.27zm11.754.216c1.26 0 2.16-.504 2.754-1.35l.036.864c0 .162.126.27.288.27h1.98c.162 0 .306-.108.306-.27V22.4c0-.162-.126-.27-.288-.27H73.15c-.162 0-.27.108-.27.27v4.662c-.594-.702-1.44-1.098-2.592-1.098-2.448 0-4.14 2.016-4.14 4.626 0 2.628 1.692 4.626 4.14 4.626m.594-2.502c-1.17 0-2.052-.828-2.052-2.124 0-1.278.882-2.124 2.052-2.124 1.206 0 2.034.846 2.034 2.106 0 1.296-.828 2.142-2.034 2.142M20.72 15c.09 0 .15-.06.15-.15v-2.26h.72c1.69 0 2.49-.93 2.49-2.29 0-1.36-.8-2.3-2.49-2.3h-2.15c-.09 0-.15.06-.15.15v6.7c0 .09.06.15.15.15zm.15-5.6h.68c.53 0 1.02.17 1.02.9 0 .72-.49.89-1.02.89h-.68zm5.5 5.6c.09 0 .16-.06.16-.15v-2.36c0-.73.38-1.13 1.01-1.13.15 0 .26.02.36.05.14.03.21 0 .21-.13v-.97c0-.09-.02-.15-.09-.2-.08-.06-.21-.13-.45-.13-.57 0-.88.4-1.04.93l-.05-.65c0-.12-.06-.16-.15-.16h-1.18c-.09 0-.15.06-.15.15v4.6c0 .09.06.15.15.15zm4.77.12c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57m0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17m5.49 1.4c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57m.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19m5.52 1.39c.71 0 1.16-.35 1.44-.85l.04.57c0 .12.07.16.16.16h1.17c.09 0 .16-.06.16-.15v-4.6c0-.09-.07-.15-.16-.15h-1.21c-.09 0-.16.06-.16.15v2.48c0 .65-.33.99-.85.99-.54 0-.82-.34-.82-.99v-2.48c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v2.84c0 1.28.74 2.03 1.76 2.03m6.44 0c.79 0 1.45-.35 1.87-.9.06-.07.05-.15-.01-.21l-.69-.66c-.08-.08-.19-.08-.26-.01-.27.25-.53.38-.86.38-.74 0-1.18-.56-1.18-1.2 0-.63.44-1.14 1.16-1.14.34 0 .6.12.86.38.08.07.19.07.27-.01l.69-.66c.06-.06.07-.15.01-.21-.42-.55-1.08-.9-1.9-.9-1.48 0-2.56 1.1-2.56 2.54 0 1.47 1.1 2.6 2.6 2.6m4.77 0c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51m5.95 0c1.48 0 2.58-1.12 2.58-2.57 0-1.45-1.1-2.57-2.58-2.57s-2.57 1.12-2.57 2.57c0 1.45 1.09 2.57 2.57 2.57m0-1.4c-.62 0-1.1-.45-1.1-1.17s.48-1.17 1.1-1.17c.62 0 1.1.45 1.1 1.17s-.48 1.17-1.1 1.17M64.79 15c.09 0 .16-.06.16-.15v-3.57h.98c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.98v-.49c0-.33.11-.57.58-.57.11 0 .25.03.42.06.07.01.13 0 .13-.07V8.02c0-.06-.03-.13-.09-.16-.3-.15-.52-.17-.82-.17-1.09 0-1.76.52-1.76 1.72v.69h-.58c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.58v3.57c0 .09.06.15.15.15zm6.08.12c.34 0 .88-.06.88-.31v-.83c0-.1-.08-.15-.18-.14-.13.01-.22.01-.31.01-.25 0-.42-.14-.42-.41v-2.16h.75c.09 0 .15-.06.15-.15v-.88c0-.09-.06-.15-.15-.15h-.75V8.95c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.16.06-.16.15v1.15h-.61c-.09 0-.15.06-.15.15v.88c0 .09.06.15.15.15h.61v2.33c0 1.14.77 1.51 1.58 1.51m4.65-5.14c-.7 0-1.15.35-1.43.85V8c0-.09-.07-.15-.16-.15h-1.22c-.09 0-.15.06-.15.15v6.85c0 .09.06.15.15.15h1.22c.09 0 .16-.06.16-.15v-2.48c0-.65.32-.99.85-.99.54 0 .82.34.82.99v2.48c0 .09.07.15.16.15h1.21c.09 0 .16-.06.16-.15v-2.84c0-1.28-.75-2.03-1.77-2.03m5.34 5.14c.69 0 1.32-.2 1.74-.62.09-.08.09-.16.05-.22l-.41-.58c-.06-.07-.1-.09-.18-.05-.41.23-.75.27-1.08.27-.7 0-1.16-.26-1.33-.79h2.82c.45 0 .58-.3.58-.8 0-1.26-.87-2.35-2.37-2.35-1.51 0-2.52 1.11-2.52 2.55 0 1.49 1.09 2.59 2.7 2.59m-1.23-3.05c.12-.58.55-.83 1.06-.83s.9.24 1 .83zm8.27 3.05c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15V8c0-.09-.07-.15-.16-.15h-1.23c-.09 0-.15.06-.15.15v2.59c-.33-.39-.8-.61-1.44-.61-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57m.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19m5.81 1.39c.7 0 1.2-.28 1.53-.75l.02.48c0 .09.07.15.16.15h1.1c.09 0 .17-.06.17-.15v-4.6c0-.09-.07-.15-.16-.15h-1.11c-.09 0-.16.06-.16.15l-.02.47c-.32-.46-.81-.74-1.53-.74-1.36 0-2.3 1.12-2.3 2.57 0 1.46.94 2.57 2.3 2.57m.33-1.39c-.65 0-1.14-.46-1.14-1.18 0-.71.49-1.18 1.14-1.18.67 0 1.13.47 1.13 1.17 0 .72-.46 1.19-1.13 1.19m5.96 3.17c.08 0 .15-.04.18-.12l2.6-6.51c.04-.11-.02-.17-.13-.17h-1.24c-.08 0-.16.04-.19.12l-1.08 3-1.08-3c-.03-.08-.11-.12-.19-.12h-1.24c-.11 0-.17.06-.13.17l1.9 4.74-.72 1.71c-.05.12.01.18.13.18z"></path></svg>
      </a>
    </div>
  )
}

const ProductHunt = () => {
  return (
    <div className="mb-8 flex justify-center">
      <div className="shadow-red-500/50 hover:shadow-red-500 shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-gray-900/10 dark:ring-gray-50/25 hover:ring-gray-900/20 dark:hover:ring-gray-50/50 inline-block">
        We are on Product Hunt!{' '}
        <a href="https://www.producthunt.com/posts/compressx" className="font-semibold text-red-500 ">
          <span className="absolute inset-0" aria-hidden="true" />
          Leave a review <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  )
}

const TimeUpdated = () => {
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [formattedTime, setFormattedTime] = useState('updated just now');

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(Date.now());
    }, 60000); // Update 'lastUpdated' every minute
    return;
  }, []);

  useEffect(() => {
    const formatTimeAgo = () => {
      const seconds = Math.floor((Date.now() - lastUpdated) / 1000);
      if (seconds < 60) {
        setFormattedTime('updated just now')
      } else {
        setFormattedTime(`updated ${Math.floor(seconds / 60)} minute${seconds >= 120 ? 's' : ''} ago`);
      }
    };

    const interval = setInterval(formatTimeAgo, 60000); // Recalculate 'formattedTime' every minute
    return;
  }, [lastUpdated]); // Rerun the effect when 'lastUpdated' changes

  return <div>{formattedTime}</div>;
};

const features = [
  "Optimized for macOS",
  "Up to 90% file size reduction",
  "Multi-format video support",
  "Integrated Raycast extension",
  "Work 100% offline",
  "Support 5 quality options",
  "Support MP4, WebM export",
  "Transparent video compatible"
]

const testimonials = [
  [
    [
      {
        id: '1731513718822121753',
      },
      {
        id: '1731546736299040892',
      },
      {
        id: '1731857517674934457',
      },
      {
        id: '1731555427064922355',
      },
      {
        id: '1731618120127971819',
      }
      // More testimonials...
    ],
    [
      {
        id: '1731440008525926437',
      },
      {
        id: '1731669211552850011',
      },
      {
        id: '1731596303556292663',
      },
      {
        id: '1731890109589364979',
      }
      // More testimonials...
    ],
  ],
  [
    [
      {
        id: '1731544859364749542',
      },
      {
        id: '1731650383754183114',
      },
      {
        id: '1731390110250217908',
      },
      {
        id: '1732005334623945129',
      }
      // More testimonials...
    ],
    [
      {
        id: '1732423095611486336',
      },
      {
        id: '1731480821499040193',
      },
      {
        id: '1731649350390923688',
      },
      {
        id: '1731576807537975750',
      }
      // More testimonials...
    ],
  ],
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

function formatBytesAsGB(bytes: number, decimals = 2): number {
  return Math.round(bytes / Math.pow(1024, 3));
}

export default function Page() {

  const [usersCount, setUsersCount] = useState(2277);
  const [videosCount, setVideosCount] = useState(7573);
  const [totalReducedSize, setTotalReducedSize] = useState(3482);
  const [loadingData, setLoadingData] = useState(true);


  const [confetti, setConfetti] = useState(false);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 30,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 5000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  
  useEffect(() => {
    setConfetti(true);
    // Reset confetti after 2 seconds
    setTimeout(() => setConfetti(false), 5000);
  }, [])

  useEffect(() => {
    fetch('https://amctrqowqyzxipgtwaxx.supabase.co/functions/v1/getLandingPageData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      setUsersCount(data.data[0].totalUsers);
      setVideosCount(data.data[0].totalCompressedVideos);
      setTotalReducedSize(formatBytesAsGB(data.data[0].totalReducedSize));
      setLoadingData(false);
    })
    .catch(error => {
      setLoadingData(false);
      console.log(error);
    });
  }, []);

  return (
    <main>
      <title>CompressX</title>
      <meta name="description" content="Ultra video compression" />
      <meta property="og:title" content="CompressX" />
      <meta property="og:description" content="Significant file size reduction, similar video quality!" />
      <meta property="og:url" content="https://hieudinh.com/compressx" />
      <meta property="og:site_name" content="ComprssX" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:url" content="https://hieudinh.com/compressx/opengraph-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:id" content="2808665022" />
      <meta name="twitter:creator" content="@hieudinh_" />
      <meta name="twitter:creator:id" content="2808665022" />
      <meta name="twitter:title" content="CompressX" />
      <meta name="twitter:description" content="Significant file size reduction, similar video quality!" />
      <meta name="twitter:image" content="https://hieudinh.com/compressx/twitter-image.png" />
      <div>
        <section>
          <div className="relative isolate bg-white dark:bg-slate-950 pb-12 sm:pb-12 pt-12 sm:pt-12">
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 bottom-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[62.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-xl lg:max-w-7xl">
                <div className="lg:mt-12 text-center flex flex-col items-center lg:items-start">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-8 tracking-tight dark:text-white">
                    CompressX
                    <div className='flex flex-col items-center lg:items-end'>
                      <Confetti active={ confetti } config={ config } />
                    </div>
                    
                  </h1>
                  <p className="mt-4 lg:mr-4 text-xl tracking-tight text-gray-700 dark:text-slate-300">
                    Significant file size reduction, similar video quality!
                  </p>
                  <div>
                    <BuyNowButton/>
                    <p className='text-sm text-gray-500 dark:text-slate-400 mt-4'>Supports Mac Intel & Apple Silicon. macOS 13+</p>
                  </div>
                </div>
                <div className='mt-4 w-full' >
                  <VideoPlayer/>
                </div>
              </div>
              <div id="features">
                <div className="mx-auto max-w-xl lg:max-w-7xl mt-8 lg:mt-16">
                  <dl className=" space-y-2 sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-4">
                    {features.map((feature) => (
                      <div key={feature} className="relative flex items-center">
                        <CheckCircleIcon className=" h-6 w-6 text-green-500" aria-hidden="true" />
                        <p className="ml-2 text-base text-slate-900 dark:text-gray-200">{feature}</p>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div id="stats">
                <dl className="mt-8 lg:mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div key="totalUsers" className="overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-4 py-5 shadow-xl border  dark:border-slate-700 sm:p-6">
                    <dt className="flex items-center">
                      <span className="truncate text-md font-medium tracking-tight text-gray-700 dark:text-slate-400">🧑‍💻 Trusted by</span>
                    </dt>
                    <dd className="">
                      {
                        loadingData ?
                        <CountUp className='mt-1 mr-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-200' start={0} end={2277} duration={3} separator="," /> 
                        :
                        <CountUp className='mt-1 mr-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-200' start={2277} end={usersCount} duration={1} separator="," /> 
                      }
                      <span className="text-md text-gray-700 dark:text-slate-400">users</span>
                    </dd>
                  </div>
                  <div key="totalCompressedVideo" className="overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-4 py-5 shadow-xl border  dark:border-slate-700 sm:p-6">
                    <dt className="flex items-center">
                      <span className="truncate text-md font-medium tracking-tight text-gray-700 dark:text-slate-400">📀 Compressed</span>
                    </dt>
                    <dd className="">
                      {
                        loadingData ?
                        <CountUp className='mt-1 mr-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-200' start={0} end={7573} duration={3} separator="," />
                        :
                        <CountUp className='mt-1 mr-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-200' start={7573} end={videosCount} duration={1} separator="," />
                      }
                      <span className="text-md text-gray-700 dark:text-slate-400">videos</span>
                    </dd>
                  </div>
                  <div key="totalReducedSize" className="overflow-hidden rounded-lg bg-white dark:bg-slate-900 px-4 py-5 shadow-xl border  dark:border-slate-700 sm:p-6">
                    <dt className="flex items-center">
                      <span className="truncate text-md font-medium tracking-tight text-gray-700 dark:text-slate-400">🔻 Reduced</span>
                    </dt>
                    <dd className="">
                      {
                        loadingData ?
                        <CountUp className='mt-1 mr-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-200' start={0} end={3482} duration={5} separator="," />
                        :
                        <CountUp className='mt-1 mr-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-200' start={3482} end={totalReducedSize} duration={1} separator="," />
                      }
                      <span className="text-md text-gray-700 dark:text-slate-400">GB</span>
                    </dd>
                  </div>
                </dl>
                <div className="flex items-center justify-center pt-4 space-x-1">
                  <span id='totalCompressedVideoPing' className="relative flex h-6 w-6 justify-center items-center">
                    {
                      loadingData ?
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                    :
                    <span className="animate-ping-slow delay-1000 absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                    }
                    
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                    {
                      loadingData ?
                    <span className="text-sm text-gray-400">fetching latest data</span>
                    :
                    <span className="text-sm text-gray-400"><TimeUpdated/></span>
                    }
                </div>
                <div className="mt-12 lg:mt-16">
                  <ProductHunt/>
                  <ProductOfTheDay />
                </div>
              </div>
              <div id="testimonial" className="mt-12 lg:mt-16">
                <div className="flex flex-col text-center text-2xl text-black dark:text-white font-semibold mt-12">🪴 People LOVE CompressX 🌱</div>
                <div className="mx-auto sm:mt-8 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-7xl xl:grid-flow-col xl:grid-cols-4">
                  <div className='sm:col-span-2 xl:col-start-2 xl:row-end-1 flex items-center flex-col'>
                    <div className='tweet-container sm:scale-110' >
                      <Tweet id='1731312819075948847'/>
                    </div>
                  </div> 
                  {testimonials.map((columnGroup, columnGroupIdx) => (
                    <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                      {columnGroup.map((column, columnIdx) => (
                        <div
                          key={columnIdx}
                          className={classNames(
                            (columnGroupIdx === 0 && columnIdx === 0) ||
                              (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                              ? 'xl:row-span-2'
                              : 'xl:row-start-1',
                            'space-y-8'
                          )}
                        >
                          {column.map((testimonial) => (
                            <div className='rounded-2xl shadow-lg' key={testimonial.id}>
                              <Tweet id={testimonial.id} />
                            </div> 
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div id="joinCreators">
            <JoinCreators users={usersCount.toLocaleString('en-US')}/>
          </div>
        </section>
        <section>
          <div id="susbcribe">
            <LemonSqueezySubscribeForm/>
          </div>
        </section>
        <footer className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center items-center text-center md:order-2 grid sm:grid-flow-col sm:auto-cols-auto space-x-4">
            <a key='how_to_setup' href='https://hieudinh.notion.site/How-to-setup-CompressX-bae796ec3aa54781bfee27c8481d6e00' className="text-gray-500 hover:text-gray-400  dark:text-slate-200">
              <p className="text-center text-xs leading-5 ">How to setup</p>
            </a>
            <a key='changelog' href='https://hieudinh.notion.site/Changelog-a1a7c020cd2d468cbd7fe826bec4875b?pvs=4' className="text-gray-500 hover:text-gray-400  dark:text-slate-200 ">
              <p className="text-center text-xs leading-5 ">Changelog</p>
            </a>
            <a key='terms_of_service' href='https://hieudinh.notion.site/Terms-of-Service-906def93ee1541769bb74957f0d8a412?pvs=4' className="text-gray-500 hover:text-gray-400  dark:text-slate-200">
              <p className="text-center text-xs leading-5">Terms of Service</p>
            </a>
            <a key='privacy_policy' href='https://hieudinh.notion.site/Privacy-Policy-f9e0cae49daa40d69ba7d3baff5c8038?pvs=4' className="text-gray-500 hover:text-gray-400  dark:text-slate-200">
              <p className="text-center text-xs leading-5">Privacy Policy</p>
            </a>
            <a key='acknowledgements' href='https://hieudinh.notion.site/Acknowledgements-bf74067c491a479588321852a18922b3?pvs=4' className="text-gray-500 hover:text-gray-400  dark:text-slate-200">
              <p className="text-center text-xs leading-5">Acknowledgements</p>
            </a>
            <a key='faqs' href='https://hieudinh.notion.site/FAQs-4581e1e772184711bf5dd7891386599b?pvs=4' className="text-gray-500 hover:text-gray-400  dark:text-slate-200">
              <p className="text-center text-xs leading-5">FAQs</p>
            </a>
            <a key='X' href='https://twitter.com/hieudinh_' className="flex flex-wrap text-gray-500 hover:text-gray-400 dark:text-slate-200">
              <p className=" text-center text-xs leading-5">Follow me on</p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="1em" height="1em"
                aria-hidden="true"
                className="align-middle h-4 w-4 fill-slate-500 group-hover:fill-slate-700 ml-1"
              >
                <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500 dark:text-slate-200">
              Made with ❤️ and ☕️ by &copy; {new Date().getFullYear()} Dinh Quang Hieu 🐈
            </p>
          </div>
        </div>
      </footer>
      </div>
    </main>
    
  )
}