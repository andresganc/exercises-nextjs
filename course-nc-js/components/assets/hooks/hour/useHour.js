
export const useHour = (date) => {
    const dateTemp = new Date(date)
    let hour = dateTemp.getHours()
    let minutes = dateTemp.getMinutes()
    let seconds = dateTemp.getSeconds()


    let hourMinutSecons = `${hour}:${minutes}::${seconds}`

    return hourMinutSecons
}