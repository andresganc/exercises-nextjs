
import Link from 'next/link'

// Components Base
import H2 from '@components/h2'
import Nav from '@components/nav'
import A from '@components/a'


const LinkBasic = () => {
  return (
    <> 
      <H2> Link Basic </H2>

      <Nav>

        <Link href="/routing-static"><A>Home</A></Link>
        <Link href="/routing-dynamic"><A>Services</A></Link>
        <Link href="/routing-dynamic"><A>Products</A></Link>
        <Link href="/routing-dynamic"><A>Contact Us</A></Link>

      </Nav>
 
    </>
  )
}

export default LinkBasic