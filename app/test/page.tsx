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
            if (window.navigator.userAgent.match(/instagram/i)) {
              window.location.href = "googlechrome://hieudinh.com";
            }
          `
        }}
      />
    </Head>
    <div>
      
      <p>test 4</p>
    </div>
    </section>
    
  )
}