export default function checkEVs (h, a, d, sa, sd, sp) {
    let message = []
    const hp = parseInt(h)
    const atk = parseInt(a)
    const def = parseInt(d)
    const spa = parseInt(sa)
    const sdf = parseInt(sd)
    const spd = parseInt(sp)

    if (isNaN(hp)) {
        message.push('Your HP EV is not an Integer!')
    } else if (isNaN(atk)) {
        message.push('Your Attack EV is not an Integer!')
    } else if (isNaN(def)) {
        message.push('Your Defense EV is not an Integer!')
    } else if (isNaN(spa)) {
        message.push('Your Special Attack EV is not an Integer!')
    } else if (isNaN(sdf)) {
        message.push('Your Special Defence EV is not an Integer!')
    } else if (isNaN(spd)) {
        message.push('Your Speed EV is not an Integer!')
    }

    if (hp < 0 || hp > 255) {
        message.push('Your HP EV is not within the accepted range (0 < EV < 255)')
    } else if (atk < 0 || atk > 255) {
        message.push('Your Attack EV is not within the accepted range (0 < EV < 255)')
    } else if (def < 0 || def > 255) {
        message.push('Your Defence EV is not within the accepted range (0 < EV < 255)')
    } else if (spa < 0 || spa > 255) {
        message.push('Your Special Attack EV is not within the accepted range (0 < EV < 255)')
    } else if (sdf < 0 || sdf > 255) {
        message.push('Your Special Defence EV is not within the accepted range (0 < EV < 255)')
    } else if (spd < 0 || spd > 255) {
        message.push('Your Speed EV is not within the accepted range (0 < EV < 255)')
    }

    let sum = hp + atk + def + spa + sdf + spd

    if (sum > 510){
        message.push('Your EVs cannot total greater than 510 in total!')
    }

    //console.log(message)

    if(message.length === 0) {
        return true
    } else {
        alert(message)
        return false
    }
}