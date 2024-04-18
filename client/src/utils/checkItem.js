export default function checkItem (item) {
    console.log('https://pokeapi.co/api/v2/item/' + item)
    fetch('https://pokeapi.co/api/v2/item/' + item)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => {alert('Item not found'); return false})
    return true
}