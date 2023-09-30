import { Metadata } from 'next'
import { redirect } from 'next/navigation'
 
export const metadata: Metadata = {
  title: 'Dad Jokes & Puns',
}

export default function Page() {
  redirect('Https://hieudinh.com')
}