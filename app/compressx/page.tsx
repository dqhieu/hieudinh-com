'use client'

// import { Metadata } from 'next'
import { Tweet } from 'react-tweet'
import Image from 'next/image'
import React, { useState, useEffect, Component } from 'react';
import LemonSqueezyLogoLightMode from '/public/assets/lemon_squeezy_black.svg'
import LemonSqueezyLogoDarkMode from '/public/assets/lemon_squeezy.svg'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import CountUp from 'react-countup'
import preview1 from '/public/assets/preview1.png'
import preview2 from '/public/assets/preview2.png'

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
    <video className="rounded-xl shadow-2xl" autoPlay muted loop playsInline>
      <source src="/compressx/demo.mp4" type="video/mp4" />
    </video>
  );
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

function formatBytesAsGB(bytes: number, decimals = 2): string {
  return Math.round(bytes / Math.pow(1024, 3)).toString();
}

export default function Page() {

  const [usersCount, setUsersCount] = useState("2190");
  const [videosCount, setVideosCount] = useState("6114");
  const [totalReducedSize, setTotalReducedSize] = useState("3014");
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [loadingSize, setLoadingSize] = useState(true);

  useEffect(() => {
    fetch('https://amctrqowqyzxipgtwaxx.supabase.co/functions/v1/getTotalUsers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      const dataString = JSON.stringify(data);
      setUsersCount(dataString);
      setLoadingUsers(false);
    })
    .catch(error => {
      setLoadingUsers(false);
      // setUsersCount("2190")
      // console.error('Error fetching total users:', error);
    });

    fetch('https://amctrqowqyzxipgtwaxx.supabase.co/functions/v1/getTotalCompressedVideos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      const dataString = JSON.stringify(data);
      setVideosCount(dataString);
      setLoadingVideos(false);
    })
    .catch(error => {
      setLoadingVideos(false);
      // setVideosCount("6114")
      // console.error('Error fetching total videos:', error);
    });

    fetch('https://amctrqowqyzxipgtwaxx.supabase.co/functions/v1/getTotalReducedSize', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      const dataString = JSON.stringify(data);
      let dataSizeString = formatBytesAsGB(parseInt(dataString));
      setTotalReducedSize(dataSizeString);
      setLoadingSize(false);
      // console.error('reduced size', dataString);
    })
    .catch(error => {
      setLoadingSize(false);
      // setTotalReducedSize("3000")
      // console.error('Error fetching total reduced size:', error);
    });
  }, []);

  return (
    <main>
      <meta property="og:title" content="CompressX" />
      <meta property="og:description" content="Ultra video compression" />
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
      <meta name="twitter:description" content="Ultra video compression" />
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
              <div className="mx-auto max-w-xl text-center">
                <h1 className="text-4xl font-bold leading-8 tracking-tight dark:text-white">CompressX</h1>
                <p className="mt-2 text-xl tracking-tight text-gray-900 dark:text-slate-100">
                  Ultra video compression
                </p>
                <a href='https://hieudinh.lemonsqueezy.com/checkout/buy/572b7285-ab58-48b5-a919-036c7787c30b'>
                  <div id='download' className="whitespace-nowrap sm:mx-28 mx-16 px-4 min-w-min sm:flex items-center bg-black dark:bg-slate-100 justify-center text-xl mt-6 text-gray-100 dark:text-black py-2 sm:rounded-full rounded-3xl transition-shadow duration-500 ease-in-out shadow-lg hover:shadow-yellow-400">
                    Get it on
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <LemonSqueezyLogo/>
                    </div>
                  </div>
                </a>
                <p className='text-sm text-gray-500 dark:text-slate-200 mt-2'>Supports Mac Intel & Apple Silicon. macOS 13+</p>
                <div className='mt-4'>
                  <VideoPlayer/>
                </div>
              </div>
              <div className="mx-auto max-w-xl xl:max-w-6xl">
                <dl className="mt-8 space-y-2 sm:grid sm:grid-cols-2 md:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 xl:grid-cols-4">
                  {features.map((feature) => (
                    <div key={feature} className="relative flex items-center">
                      <CheckCircleIcon className=" h-6 w-6 text-green-500" aria-hidden="true" />
                      <p className="ml-2 text-base text-slate-900 dark:text-gray-200">{feature}</p>
                    </div>
                  ))}
                </dl>
              </div>
              <div id='totalUsers' className="mt-8 flex justify-center items-center mx-auto max-w-xl text-center text-lg tracking-tight text-gray-900 dark:text-slate-200">
                <span id='ping' className="relative flex h-6 w-6 justify-center items-center">
                  <span className="animate-ping-slow absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Trusted by 
                {
                  loadingUsers ?
                  <CountUp className='px-2' start={0} end={2190} duration={3} separator="," /> 
                  :
                  <CountUp className='px-2' start={2190} end={parseInt(usersCount)} duration={1} separator="," /> 
                }
                
                users 🌟
              </div>
              <div id='totalVideos' className="flex justify-center items-center mx-auto max-w-xl text-center mt-2 text-lg tracking-tight text-gray-900 dark:text-slate-200">
                <span id='ping' className="relative flex h-6 w-6 justify-center items-center">
                  <span className="animate-ping-slow absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {
                  loadingVideos ?
                  <CountUp className='pr-2' start={0} end={6000} duration={3} separator="," />
                  :
                  <CountUp className='pr-2' start={6000} end={parseInt(videosCount)} duration={1} separator="," />
                }
                 videos compressed 📀
              </div>
              <div id='totalReducedSize' className="flex justify-center items-center mx-auto max-w-xl text-center mt-2 text-lg tracking-tight text-gray-900 dark:text-slate-200">
                <span id='ping' className="relative flex h-6 w-6 justify-center items-center">
                  <span className="animate-ping-slow absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {
                  loadingSize ?
                  <CountUp className='pr-2' start={0} end={3014} duration={5} separator="," />
                  :
                  <CountUp className='pr-2' start={3014} end={parseInt(totalReducedSize)} duration={1} separator="," />
                }
                GB reduced 🔽
              </div>
              <div className="mx-auto sm:mt-8 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
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
              Made with ❤️ and ☕️ by &copy; 2023 Dinh Quang Hieu 🐈
            </p>
          </div>
        </div>
      </footer>
      </div>
    </main>
    
  )
}