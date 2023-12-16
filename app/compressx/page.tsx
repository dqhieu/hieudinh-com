import { Metadata } from 'next'
import { Tweet } from 'react-tweet'

export const metadata: Metadata = {
  title: 'CompressX',
}

// export default function Page() {
//   redirect('https://hieudinh.lemonsqueezy.com/checkout/buy/572b7285-ab58-48b5-a919-036c7787c30b')
// }


export default function Page() {
  return (
    <div>
      <Tweet id="1705155679819084179" />
    </div> 
  )
}
