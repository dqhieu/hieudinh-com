import { Metadata } from 'next'
import Head from 'next/head';
import { redirect } from 'next/navigation'
 
export const metadata: Metadata = {
  title: 'Dad Jokes & Puns',
}

export default function Page() {
  return(
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">Open Link in New Tab</a>
    
  )
}