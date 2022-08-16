
import Link from 'next/link'
import Icon from '@mdi/react'
import Styled from 'styled-components'

// NC Components Base
import Div from '@components/div'
import H6 from '@components/h6'
import A from '@components/a'
import P from '@components/p'

// Icons 
import { mdiHome, mdiLinkLock, mdiLink, mdiLinkPlus } from '@mdi/js'


const Card = Styled(Div) `
    display: grid;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 150px;
    border-radius: 8px;
    background-color: #F5F5F5;
    padding: 10px;
    cursor: pointer;
    transition: .3s;
    margin: 5px;
    text-align: center;

    &:hover {
        background-color: #B3E5FC;
        box-shadow: 0 0 10px #9E9E9E;
    }

`

const Menu = () => {
    return (
        <>
            <Div displayFlex>
                <Card>
                    <Link href='/'>
                        <Div displayGrid jcCenter aiCenter>
                            <Div>
                                <Icon path={mdiHome} title="Home" size={1.5} color='#616161' />
                            </Div>
                            <Div>
                                <H6 textGray800>Home</H6>
                                <P fontSize8 textGray500 marginT2>Routing static using link into next </P>
                            </Div>  
                        </Div>     
                    </Link>
                </Card>

                <Card>
                    <Link href='/'>
                        <Div displayGrid jcCenter aiCenter>
                            <Div>
                                <Icon path={mdiLinkLock} title="Routing static" size={1.5} color='#616161' />
                            </Div>
                            <Div>
                                <H6 textGray800>Routing static</H6>
                                <P fontSize8 textGray500 marginT2>Routing static using link into next </P>
                            </Div>
                        </Div>     
                    </Link>
                </Card>

                <Card>
                    <Link href='/'>
                        <Div displayGrid jcCenter aiCenter>
                            <Div>
                                <Icon path={mdiLink} title="Routing dynamic" size={1.5} color='#616161' />
                            </Div>
                            <Div>
                                <H6 textGray800>Routing dynamic</H6>
                                <P fontSize8 textGray500 marginT2>Routing static using link into next </P>
                            </Div> 
                        </Div>     
                    </Link>
                </Card>

                <Card>
                    <Link href='/'>
                        <Div displayGrid jcCenter aiCenter>
                            <Div>
                                <Icon path={mdiLinkPlus} title="Routing dynamic" size={1.5} color='#616161' />
                            </Div>
                            <Div>
                                <H6 textGray800>Redirect</H6>
                                <P fontSize8 textGray500 marginT2>Redirect into next </P>
                            </Div> 
                        </Div>     
                    </Link>
                </Card>
                
            </Div>
        </>
    )
}

export default Menu
