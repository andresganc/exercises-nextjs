
/*
Add code into the component menu

import React, { useEffect } from 'react'

// Hooks
import useScreen from '@components/assets/hooks/useScreen'

// NC Components base
import H2 from '@components/h2' 


const menuNC01 = () => {

    const [
        handleScreen, 
        handleAddScreen, 
        handleRemoveScreen, 
        mobileS, 
        mobileM, 
        mobileL,
        tablet,
        laptop,
        laptopL,
        screen2K,
        screen4K,
        screen8K
        ] = useScreen()

    useEffect(() => {

        handleScreen()

        handleAddScreen()
        
        return () => handleRemoveScreen()

    }, [])
    
        
    if ((mobileS) || (mobileM) || (mobileL) || (tablet) === true ) {
        return <H2> Menu para mobiles </H2>
    } 

    if ((laptop) || (laptopL) || (screen2K) === true ) {
        return <H2> Menu para desktops </H2>
    } 

    return <H2> Error al cargar el componente </H2>
  
}

export default menuNC01

*/


import { useState, useEffect } from 'react'


const useScreen = () => {

    const [mobileS, setMobileS] = useState(false)
    const [mobileM, setMobileM] = useState(false)
    const [mobileL, setMobileL] = useState(false)
    const [tablet, setTablet] = useState(false)
    const [laptop, setLaptop] = useState(false)
    const [laptopL, setLaptopL] = useState(false)
    const [screen2K, setScreen2K] = useState(false)
    const [screen4K, setScreen4K] = useState(false)
    const [screen8K, setScreen8K] = useState(false)
    

    const handleScreen = () => {

        if ( window.innerWidth <= 320 ) {
            console.log('Screen Mobile S')
            setMobileS(true)
            setMobileM(false)
            setMobileL(false)
            setTablet(false)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 321 && window.innerWidth <= 375 ) {
            console.log('Screen Mobile M')
            setMobileS(false)
            setMobileM(true)
            setMobileL(false)
            setTablet(false)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 376 && window.innerWidth <= 425 ) {
            console.log('Screen Mobile L')
            setMobileS(false)
            setMobileM(false)
            setMobileL(true)
            setTablet(false)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 426 && window.innerWidth <= 768 ) {
            console.log('Screen Tablet')
            setMobileS(false)
            setMobileM(false)
            setMobileL(false)
            setTablet(true)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 769 && window.innerWidth <= 1024 ) {
            console.log('Screen Laptop')
            setMobileS(false)
            setMobileM(false)
            setMobileL(false)
            setTablet(false)
            setLaptop(true)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 1025 && window.innerWidth <= 1440 ) {
            console.log('Screen Laptop L')
            setMobileS(false)
            setMobileM(false)
            setMobileL(false)
            setTablet(false)
            setLaptop(false)
            setLaptopL(true)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 1441 && window.innerWidth <= 2560 ) {
            console.log('Screen 2K')
            setMobileS(false)
            setMobileM(false)
            setMobileL(false)
            setTablet(false)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(true)
            setScreen4K(false)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 2561 && window.innerWidth <= 3840 ) {
            console.log('Screen Screen 4K')
            setMobileS(false)
            setMobileM(false)
            setMobileL(false)
            setTablet(false)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(true)
            setScreen8K(false)
        }

        if ( window.innerWidth >= 3841 && window.innerWidth <= 7680 ) {
            console.log('Screen Screen 8K')
            setMobileS(false)
            setMobileM(false)
            setMobileL(false)
            setTablet(false)
            setLaptop(false)
            setLaptopL(false)
            setScreen2K(false)
            setScreen4K(false)
            setScreen8K(true)
        }
        
    }

    const handleAddScreen = () => {
        
        window.addEventListener('resize', handleScreen)

    }

    const handleRemoveScreen = () => {

        window.removeEventListener('resize', handleScreen)

    }

  return [

    handleScreen,
    handleAddScreen,
    handleRemoveScreen,
    mobileS, 
    mobileM, 
    mobileL,
    tablet,
    laptop,
    laptopL,
    screen2K,
    screen4K,
    screen8K

  ]
}

export default useScreen