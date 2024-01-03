'use client'

// import { Metadata } from 'next'
import { Tweet } from 'react-tweet'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import LemonSqueezyLogoLightMode from '/src/images/lemon_squeezy_black.svg'
import LemonSqueezyLogoDarkMode from '/src/images/lemon_squeezy.svg'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import CountUp from 'react-countup'

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
        <span className="">Get it on</span>
        <LemonSqueezyLogo/>
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
              <GetItOnLemonSqueezy/>
            </div>
          </div>
        </div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-xl lg:max-w-7xl">
                <div className="lg:mt-12 text-center flex flex-col items-center lg:items-start">
                  <div className="mb-8 sm:flex sm:justify-center ">
                    <div className="shadow-red-500/50 hover:shadow-red-500 shadow-lg hover:shadow-xl transition-shadow duration-500 ease-in-out relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-white ring-1 ring-gray-900/10 dark:ring-gray-50/25 hover:ring-gray-900/20 dark:hover:ring-gray-50/50">
                      Our Product Hunt launch scheduled for January 4th, 2024!{' '}
                      <a href="https://www.producthunt.com/posts/compressx" className="font-semibold text-red-500 ">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Join us <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-8 tracking-tight dark:text-white">CompressX</h1>
                  <p className="mt-4 lg:mr-4 text-xl tracking-tight text-gray-700 dark:text-slate-300">
                    Significant file size reduction, similar video quality!
                  </p>
                  <div>
                    <GetItOnLemonSqueezy/>
                    <p className='text-sm text-gray-500 dark:text-slate-400 mt-2'>Supports Mac Intel & Apple Silicon. macOS 13+</p>
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
              </div>
              <div id="testimonial" className="mt-12 lg:mt-16">
                <div className="flex flex-col text-center text-2xl text-black dark:text-white font-semibold">🪴 People LOVE CompressX 🌱</div>
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