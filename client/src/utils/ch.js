export default function ch (str) {
    if (!str){
        return
    }

    let arr = str.split("-")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1)
    }
    return arr.join(' ')

}