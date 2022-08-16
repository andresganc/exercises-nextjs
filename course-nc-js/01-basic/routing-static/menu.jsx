
import Link from 'next/link'

// Components Base
import H3 from '@components/h3'
import Nav from '@components/nav'
import A from '@components/a'


const Menu = () => {
    return (
        <>
            <H3> Link Basic </H3>

            <Nav>

                <Link href="/routing-static"><A>Home</A></Link>
                <Link href="/routing-dynamic"><A>Services</A></Link>
                <Link href="/routing-dynamic"><A>Products</A></Link>
                <Link href="/routing-dynamic"><A>Contact Us</A></Link>

            </Nav>
        </>
    )
}

export default Menu