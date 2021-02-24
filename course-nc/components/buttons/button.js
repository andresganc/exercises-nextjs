
import styled, { css } from 'styled-components'

// Fonts
import roboto from '../assets/fonts/fonts'

// Colors
import colorsBG from '../assets/colors/colors-bg'
import colorsText from '../assets/colors/colors-text'


// ========================= TYPES ============================
    const buttonBase = css `
        font-size: .9rem;
        padding: .5rem 1.5rem;
        border: none;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: #03A9F4;
                //background-color: rgba(255, 255, 255, .1)
        }

    `
    
    const buttonDefault = css `
        font-size: .9rem;
        padding: .5rem 1.5rem;
        border: none;
        border-radius: .1rem;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: #03A9F4;
                //background-color: rgba(255, 255, 255, .1)
        }

    `

    const buttonRound = css `
        font-size: .9rem;
        padding: .5rem 1.5rem;
        border: none;
        border-radius: .9rem;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
            background-color: #03A9F4;
            //background-color: rgba(255, 255, 255, .1)
        }

    `

    const buttonCircle = css `
        font-size: .9rem;
        padding: .6rem .9rem;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        outline: none;
        transition: .2s;

        &:hover {
                background-color: #03A9F4;
                //background-color: rgba(255, 255, 255, .1)
        }

    `
// ========================= TYPES ============================


// ========================= SHADOW =============================
const Shadow = css ` box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.1); `




const Button = styled.button `

    /* Font */
    ${ roboto }

    /* Button base*/
    ${ buttonBase } 


    // TYPE
    ${ props => props.default && css ` ${ buttonDefault } `}
    ${ props => props.round && css ` ${ buttonRound } `}
    ${ props => props.circle && css ` ${ buttonCircle } `}

    // SHADOW    
    ${ props => props.shadow && css ` ${ Shadow } `}

    
    /* Colors */
    ${ colorsBG }
    ${ colorsText }
`

export default Button;