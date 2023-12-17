import { Metadata } from 'next'
import { Tweet } from 'react-tweet'
import Image from 'next/image'
import LemonSqueezyLogo from '/src/images/lemon_squeezy_black.svg'

export const metadata: Metadata = {
  title: 'CompressX - Ultra video compression',
  description: 'Compress your video in just 2 clicks',
  openGraph: {
      images: ['/src/images/compressx_meta.png'],
  },
}

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
        id: '1731451342529368412',
      },
      {
        id: '1731480821499040193',
      },
      {
        id: '1731649350390923688',
      },
      {
        id: '1731868122288644288',
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

export default function Page() {
  return (
    <div>
      <div className="relative isolate bg-white pb-12 sm:pb-12 pt-12 sm:pt-12">
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-bold leading-8 tracking-tight">CompresX</h2>
            <p className="mt-2 text-xl tracking-tight text-gray-900">
              Ultra video compression
            </p>
            <div id='download' className="flex flex-wrap items-center justify-center text-2xl mt-8">
              Get it for free on<a href='https://hieudinh.lemonsqueezy.com/'><Image className="pl-2" src={LemonSqueezyLogo} alt="LemonSqueezy logo"/></a>
            </div>
            <p className="mt-12 text-lg tracking-tight text-gray-900">
              Trusted by 5000+ users
            </p>
          </div>
          <div className="mx-auto  sm:mt-8 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <div className='light sm:col-span-2 xl:col-start-2 xl:row-end-1 flex items-center flex-col'>
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
                      <div className='light rounded-2xl shadow-lg' key={testimonial.id}>
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
      <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a key='X' href='https://hieudinh.notion.site/How-to-setup-CompressX-bae796ec3aa54781bfee27c8481d6e00' className="text-gray-400 hover:text-gray-500">
            <p className="text-center text-xs leading-5 text-gray-500">How to setup</p>
          </a>
          <a key='X' href='https://twitter.com/hieudinh_' className="flex flex-wrap text-gray-400 hover:text-gray-500">
            <p className=" text-center text-xs leading-5 text-gray-500">Follow me on</p>
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
          <p className="text-center text-xs leading-5 text-gray-500">
            Made with ❤️ and ☕️ by &copy; 2023 Dinh Quang Hieu 🐈
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}