import Link from 'next/link'

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a className=''>About</a>
      </Link>
    </p>
  </>
)

export default IndexPage
