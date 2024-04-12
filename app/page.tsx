'use client'

import Image from 'next/image'
import swiftGif from '/src/images/wwdc-swift-cropped.gif'
import profilePhoto from '/src/images/profile_photo.jpg'
import CompressXLogo from '/src/images/icon.png'
import LemonQLogo from '/src/images/lemon-squeezy-logos.jpeg'
import GitHubLogo from '/src/images/github-mark-white.png'
import ProductHuntLogo from '/src/images/producthunt.png'
import BaoBao from '/src/images/baobao.jpg'
import BigMountainStudioLogo from '/src/images/bigmountainstudio.png'
import clsx from 'clsx'
import React, { HTMLAttributes, useState, useEffect } from 'react';

const Container =({ className, ...props }: { className?: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx('row-span-1 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-10 border border-neutral-700	bg-indigo-400 bg-clip-padding p-4 text-white', className)}
      {...props}
    />
  )
}

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set isSmallScreen to true if the window width is less than 640px
    setIsSmallScreen(window.innerWidth < 640);
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <main>
      <title>Hieu Dinh</title>
      <meta name="description" content="I make apps for  ecosystem" />
      <meta property="og:title" content="Hieu Dinh" />
      <meta property="og:description" content="I make apps for  ecosystem" />
      <meta property="og:url" content="https://hieudinh.com/" />
      <meta property="og:site_name" content="Hieu Dinh" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:url" content="https://hieudinh.com/opengraph-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:id" content="2808665022" />
      <meta name="twitter:creator" content="@hieudinh_" />
      <meta name="twitter:creator:id" content="2808665022" />
      <meta name="twitter:title" content="Hieu Dinh" />
      <meta name="twitter:description" content="I make apps for  ecosystem" />
      <meta name="twitter:image" content="https://hieudinh.com/twitter-image.png" />
      <div className="bg-black relative flex items-center justify-center " style={isSmallScreen ? {} : {height: '100vh'}}>
        <Image
          className="fixed z-10 "
          src={swiftGif}
          alt="background gif"
          priority
          width={1200}
          height={1200}
        />
        <div id='bento' className="grid grid-cols-2 sm:grid-cols-3 gap-4 z-20 relative py-20"> 
          <Container className="w-48 h-48 transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-sky-500">
            <div className="flex flex-col  mt-2 ml-1">
              <Image
                className=" z-10 rounded-full"
                src={profilePhoto}
                alt="Profile picture"
                priority
                width={48}
                height={48}
                unoptimized
              />
              <span className="mt-4">Hieu Dinh</span>
              <span className="mt-4 text-sm">Software Engineer ☀️</span>
              <span className="mt-0 text-sm">Indie Hacker 🌙</span>
            </div>
          </Container>
          
          <a 
          className="transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-indigo-400" 
          href='https://x.com/hieudinh_'
          >
            <Container className="w-48 h-48">
              <div className="flex flex-col mt-2 ml-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" width="1em" height="1em"
                  aria-hidden="true"
                  className="align-middle h-12 w-12 fill-slate-500 group-hover:fill-slate-700 ml-1"
                >
                  <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path>
                </svg>
                <span className="mt-4 text-gray-400 text-sm">I post everything about Swift and  ecosystem development + my indie hacking journey</span>
              </div>
            </Container>
          </a>
          <a 
          className="transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-orange-400" 
          href='https://open.substack.com/pub/hieudinh/p/february-2024?r=1ovhn9&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true'
          >
            <Container className="w-48 h-48">
              <div className="flex flex-col mt-2">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                shape-rendering="geometricPrecision" 
                text-rendering="geometricPrecision" 
                image-rendering="optimizeQuality" 
                viewBox="0 0 448 511.471"
                className="align-middle h-12 w-12 fill-slate-500 group-hover:fill-slate-700 ml-1"
                >
                  <path fill="#FF681A" d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z"/>
                </svg>
                <span className="mt-4">Substack</span>
                <span className="mt-4 text-gray-400 text-sm">Latest issue: </span>
                <span className="text-gray-400 text-sm">February 2024</span>
              </div>
            </Container>
          </a>
          
          <a 
          className="col-span-2 transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-neutral-400" 
          href='https://compressx.app/'
          >
            <Container className="w-100 h-48 ">
              <div className="grid grid-cols-2 ">
                <div className="flex flex-col auto-cols-auto text-wrap  items-start">
                  <span className="text-2xl">CompressX</span>
                  <span className="mt-2 text-sm text-gray-400">Significant file size reduction, similar video quality!</span>
                  <span className="mt-4 text-sm text-gray-400">Trusted by 2000+ users</span>
                </div>
                <div className="flex flex-col items-end">
                  <Image
                    className=""
                    src={CompressXLogo}
                    alt="CompressX logo"
                    priority
                    width={160}
                    height={160}
                    unoptimized
                  />
                </div>
              </div>
            </Container>
          </a>
          <a 
          className="transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-yellow-400" 
          href='https://compressx.lemonsqueezy.com/'
          >
            <Container className="w-48 h-48">
              <div className="flex flex-col flex-wrap mt-2 ml-1">
                <Image
                  className=" z-10 rounded-full"
                  src={LemonQLogo}
                  alt="Lemon Squeezy Logo"
                  priority
                  width={48}
                  height={48}
                  unoptimized
                />
                <span className="mt-4 ">Lemon Squeezy</span>
                <span className="mt-4 text-gray-400 text-sm">Products created: 4</span>
              </div>
            </Container>
          </a>
          {/* <Container className="">
            
          </Container> */}
          <a 
          className="transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-red-400" 
          href='https://www.producthunt.com/@hieudinh'
          >
            <Container className="w-48 h-48">
              <div className="flex flex-col flex-wrap mt-2 ml-1">
                <Image
                  className=" z-10 rounded-full"
                  src={ProductHuntLogo}
                  alt="Product Hunt Logo"
                  priority
                  width={48}
                  height={48}
                  unoptimized
                />
                <span className="mt-4 ">Product Hunt</span>
                <span className="mt-4 text-gray-400 text-sm">Products launched: 3</span>
              </div>
            </Container>
          </a>
          <a 
          className="transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-green-400" 
          href='https://github.com/dqhieu'
          >
            <Container className="w-48 h-48">
              <div className="flex flex-col flex-wrap mt-2 ml-1">
                <Image
                  className=" z-10 rounded-full"
                  src={GitHubLogo}
                  alt="GitHub Logo"
                  priority
                  width={48}
                  height={48}
                  unoptimized
                />
                <span className="mt-4 ">GitHub</span>
                <span className="mt-4 text-gray-400 text-sm">Many useful things here</span>
              </div>
            </Container>
          </a>
          <a 
          className="transition-shadow duration-500 ease-in-out shadow-lg rounded-xl hover:shadow-green-400" 
          href='https://hieudinh.notion.site/Learn-SwiftUI-with-Big-Mountain-Studio-30afd2742f7f4476b2fc09d2f5ff2273?pvs=4'
          >
            <Container className="w-48 h-48">
              <div className="flex flex-col flex-wrap mt-2 ml-1">
                <Image
                  className=" z-10 rounded-full"
                  src={BigMountainStudioLogo}
                  alt="GitHub Logo"
                  priority
                  width={48}
                  height={48}
                  unoptimized
                />
                <span className="mt-4 ">Big Mountain Studio</span>
                <span className="mt-4 text-gray-400 text-sm">Learn SwiftUI</span>
              </div>
            </Container>
          </a>
        </div>
      </div>
    </main>
  )
}

