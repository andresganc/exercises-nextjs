
import Link from 'next/link'
import Icon from '@mdi/react'

// NC Components Base
import Div from '@components/div'
import Nav from '@components/nav'
import A from '@components/a'

// Icons 
import { mdiHome } from '@mdi/js'


const Menu = () => {
    return (
        <>
            <Nav>
                <Div displayFlex jcCenter aiCenter>
                    <Icon path={mdiAccount}
                        title="User Profile"
                        size={1}
                        horizontal
                        vertical
                        rotate={90}
                        color="red"
                        spin/>
                    <Link href=''><A>Home</A></Link>
                </Div>
                
            </Nav>
        </>
    )
}

export default Menu
