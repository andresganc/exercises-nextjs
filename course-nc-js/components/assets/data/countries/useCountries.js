
import React, { Fragment, useState, useEffect } from 'react'
import countriesJSON from './countries.json'

const useCountries = () => {

    const [dataCountries, setDataCountries] = useState()


    useEffect(() => {

        apiData()

    }, [])


    const apiData = async () => {

        try {

            // const api = './countries.json'
            const result = await fetch(countriesJSON)
            const getResult = await result.text()
            //const getResultParse = JSON.parse(getResult)
            setDataCountries(result)

        } catch (error) {

            console.error(error)

        }

    }

    //console.log(dataCountries)

    return [ dataCountries, apiData ] 

}


export default useCountries