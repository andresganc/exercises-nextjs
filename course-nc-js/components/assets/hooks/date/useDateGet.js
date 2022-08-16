
// Hooks Date Get Format Name Spanish
export const useDateFormat = (date) => {

    const dateTemp = new Date(date)
    let date = dateTemp.getDate()
    let month = dateTemp.getMonth()
    let year = dateTemp.getFullYear()


    let dateFormat = `${date}-${month}-${year}`

    return dateFormat
    
}


// Hooks Date Get Format Name Spanish
export const useDateFormatNameES = (date) => {

    const dateTemp = new Date(date)
    let day = dateTemp.getDay()
    let date = dateTemp.getDate()
    let month = dateTemp.getMonth()
    let year = dateTemp.getFullYear()

    console.log("Dia:", day)
    console.log("Dia:", month)
    console.log("Dia:", year)

    // Dias
    const spanishDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];

    const nameDay = spanishDays[day];

    // Meses
    const spanishMonths = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const nameMonth = spanishMonths[month];

    let dateFormat = `${year}-${month}-${date}`
    let dateFormatNameES = `${nameDay} ${date} ${nameMonth} ${year}`
    let dateFormat3 = String(year + "-" + month + "-" + date)

    return dateFormatNameES
    
}


// Hooks Date Get Format Name Spanish
export const useDateFormatNameDayPlusES = (date) => {

    const dateTemp = new Date(date)
    let day = dateTemp.getDay() + 1
    let date = dateTemp.getDate() + 1
    let month = dateTemp.getMonth()
    let year = dateTemp.getFullYear()

    console.log("Dia:", day)
    console.log("Dia:", month)
    console.log("Dia:", year)

    // Dias
    const spanishDays = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];

    const nameDay = spanishDays[day];

    // Meses
    const spanishMonths = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const nameMonth = spanishMonths[month];

    let dateFormat = `${year}-${month}-${date}`
    let dateFormatNameES = `${nameDay} ${date} ${nameMonth} ${year}`
    let dateFormat3 = String(year + "-" + month + "-" + date)

    return dateFormatNameES
    
}


// Hooks Date Get Format Name English
export const useDateFormatNameEN = (date) => {

    const dateTemp = new Date(date)
    let day = dateTemp.getDay()
    let date = dateTemp.getDate()
    let month = dateTemp.getMonth()
    let year = dateTemp.getFullYear()

    console.log("Dia:", day)
    console.log("Dia:", month)
    console.log("Dia:", year)

    // Dias
    const englishDays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const nameDay = englishDays[day];

    // Meses
    const englishMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const nameMonth = englishMonths[month];

    let dateFormat = `${year}-${month}-${date}`
    let dateFormatNameEN = `${day} ${date} ${nameMonth} ${year}`
    let dateFormat3 = String(year + "-" + month + "-" + dateFormatNameEN);

    return dateFormatNameEN
    
}


// Hooks Date Get Format Name English
export const useDateFormatNameDayPlusEN = (date) => {

    const dateTemp = new Date(date)
    let day = dateTemp.getDay() + 1
    let date = dateTemp.getDate() + 1
    let month = dateTemp.getMonth()
    let year = dateTemp.getFullYear()

    console.log("Dia:", day)
    console.log("Dia:", month)
    console.log("Dia:", year)

    // Dias
    const dias = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
    ];

    const nameDay = dias[day];

    // Meses
    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const nameMonth = meses[month];

    let dateFormat = `${year}-${month}-${date}`
    let dateFormatNameEN = `${day} ${date} ${nameMonth} ${year}`
    let dateFormat3 = String(year + "-" + month + "-" + date)

    return dateFormatNameEN
    
}