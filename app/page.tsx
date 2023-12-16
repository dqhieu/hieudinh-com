import Image from 'next/image'
import swiftGif from '/src/images/wwdc-swift.gif'
import LemonSqueezyLogo from '/src/images/lemon_squeezy.svg'

export default function Home() {
  return (
    <main>
      
      <div className="min-h-screen flex flex-col items-center justify-center font:sans-serif bg-black">
        <Image
          className="fixed"
          src={swiftGif}
          alt="background video"
          priority
          width={1558}
          height={946}
          unoptimized
        />
        <div className="absolute flex flex-col items-center justify-center text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p>Hi, I’m Hieu Dinh</p>
          <p>I make apps for  ecosystem</p>
          <p>Check out my works on <a href='https://x.com/hieudinh_'>𝕏</a></p>
          <div className="flex items-center">
            Get my apps for free on<a href='https://hieudinh.lemonsqueezy.com/'><Image className="pl-2" src={LemonSqueezyLogo} alt="LemonSqueezy logo"/></a>
          </div>
        </div>
      </div>

    </main>
  )
}

