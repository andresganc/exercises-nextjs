
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'



// ========================= ICON ============================
    
    const SVG = styled.svg`
        flex: none;
        transition: fill 0.25s;
        width: 40px;
        height: 40px;
        fill: white;
    `;


// ========================= TYPES ============================

    const typeBase = css `
        background-color: #BDBDBD;
        border-radius: .1rem;
        transition: .2s;
        
        /*
        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }
        */
    `

    const typeDefault = css `
        background-color: #BDBDBD;
        border-radius: .1rem;
        transition: .2s;

        /*
        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }
        */
    `

    const typeRound = css `
        background-color: #BDBDBD;
        border-radius: .4rem;
        transition: .2s;

        /*
        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }
        */

    `

    const typeCircle = css `
        background-color: #BDBDBD;
        border-radius: 50%;
        transition: .2s;

        /*
        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }
        */

    `

    
// ========================= TYPES ============================


// ========================= SIZE =============================
    const sizeXS = css ` width: 25px; padding: .3rem; `
    const sizeS = css ` width: 30px; padding: .4rem; `
    const sizeM = css ` width: 40px; padding: .5rem; `
    const sizeL = css ` width: 60px; padding: .6rem; `
    const sizeXL = css ` width: 80px; padding: .7rem; `
    const sizeXXL = css ` width: 100px; padding: .8rem; `


// ========================= SHADOW =============================
    const Shadow = css ` box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.1); `




const Avatar = styled.img `

    // Avatar base
    ${ typeBase } 

    // Size
    ${ sizeM }

    // TYPE
    ${ props => props.default && css ` ${ typeDefault } `}
    ${ props => props.round && css ` ${ typeRound } `}
    ${ props => props.circle && css ` ${ typeCircle } `}
    
    // SIZE
    ${ props => props.sizeXS && css ` ${ sizeXS } `}
    ${ props => props.sizeS && css ` ${ sizeS } `}
    ${ props => props.sizeM && css ` ${ sizeM } `}
    ${ props => props.sizeL && css ` ${ sizeL } `}
    ${ props => props.sizeXL && css ` ${ sizeXL } `}
    ${ props => props.sizeXXL && css ` ${ sizeXXL } `}

    // SHADOW    
    ${ props => props.shadow && css ` ${ Shadow } `}

    // Colors
    ${ colorsBG }
    ${ colorsText }
    
`

/* 
const Avatar = (props) => {
    return (
        <Fragment>
            <Container >
                <Icon xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </Icon>
            </Container>
        </Fragment>
    )
}
*/

export default Avatar;
