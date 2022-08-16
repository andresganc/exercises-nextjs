
import Link from 'next/link'
import Icon from '@mdi/react'

// NC Components Base
import Div from '@components/div'
import Nav from '@components/nav'
import A from '@components/a'
import Button from '@components/button'

// Icons 
import { mdiHome, mdiLink } from '@mdi/js'

const Menu = () => {
    return (
        <>
            <Nav>
                <Button cursorPointer marginX1 paddingX15 paddingY8 borderRadius1>
                    <Div>
                        <Icon path={mdiHome} title="Home" size={1.5} color='#616161' />
                    </Div>
                    <Div>
                        <Link href='/'><A textGray800 >Home</A></Link>
                    </Div>     
                </Button>

                <Button cursorPointer marginX2 paddingX15 paddingY8 borderRadius1>
                    <Div>
                        <Icon path={mdiLink} title="Home" size={1.5} color='#616161' />
                    </Div>
                    <Div>
                        <Link href=''><A textGray800>Routing static</A></Link>
                    </Div>     
                </Button>
                
            </Nav>
        </>
    )
}

export default Menu
