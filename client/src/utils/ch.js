export default function ch (str) {
    let arr = str.split("-")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
    }
    return arr.join(' ')

}