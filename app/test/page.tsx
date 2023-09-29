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
            window.location.href = "googlechrome://hieudinh.com";
          `
        }}
      />
    </Head>
    <div>
      
      <p>test 5</p>
    </div>
    </section>
    
  )
}