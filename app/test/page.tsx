import { Metadata } from 'next'
import Head from 'next/head';


 
export const metadata: Metadata = {
  title: 'Dad Jokes & Puns',
}

export default function Page() {
  return(
    <section>
      <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (window.navigator.userAgent.includes(instagram)) {
              window.location.href = "https://github.com";
            }
          `
        }}
      />
    </Head>
    <div>
      
      <p>test 3</p>
    </div>
    </section>
    
  )
}