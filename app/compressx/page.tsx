import { redirect } from 'next/navigation'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'CompressX',
}

export default function Page() {
  redirect('https://hieudinh.lemonsqueezy.com/checkout/buy/572b7285-ab58-48b5-a919-036c7787c30b')
}