import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

// Views
import StylesCSS from './styles-in-next/styles-css/stylesCSS'
import StylesModulesCSS from './styles-in-next/styles-module-css/stylesModulesCSS'
import StylesStyledJSX from './styles-in-next/styles-css-in-js-styled-jsx/StylesCSSInJSStyledJSX'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>

      <StylesCSS />
      <StylesModulesCSS />
      <StylesStyledJSX />
      
    </Fragment>
    
  )
}
