export default function checkIVs (h, a, d, sa, sd, sp) {
    let message = []
    const hp = parseInt(h)
    const atk = parseInt(a)
    const def = parseInt(d)
    const spa = parseInt(sa)
    const sdf = parseInt(sd)
    const spd = parseInt(sp)

    if (isNaN(hp)) {
        message.push('Your HP IV is not an Integer!')
    } else if (isNaN(atk)) {
        message.push('Your Attack IV is not an Integer!')
    } else if (isNaN(def)) {
        message.push('Your Defense IV is not an Integer!')
    } else if (isNaN(spa)) {
        message.push('Your Special Attack IV is not an Integer!')
    } else if (isNaN(sdf)) {
        message.push('Your Special Defence IV is not an Integer!')
    } else if (isNaN(spd)) {
        message.push('Your Speed IV is not an Integer!')
    }

    if (hp < 0 || hp > 31) {
        message.push('Your HP IV is not within the accepted range (0 < IV < 31)')
    } else if (atk < 0 || atk > 31) {
        message.push('Your Attack IV is not within the accepted range (0 < IV < 31)')
    } else if (def < 0 || def > 31) {
        message.push('Your Defence IV is not within the accepted range (0 < IV < 31)')
    } else if (spa < 0 || spa > 31) {
        message.push('Your Special Attack IV is not within the accepted range (0 < IV < 31)')
    } else if (sdf < 0 || sdf > 31) {
        message.push('Your Special Defence IV is not within the accepted range (0 < IV < 31)')
    } else if (spd < 0 || spd > 31) {
        message.push('Your Speed IV is not within the accepted range (0 < IV < 31)')
    }

    if(message.length === 0) {
        return true
    } else {
        return false
    }
}