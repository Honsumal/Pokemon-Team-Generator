export default function statCalc (base, EV, IV, nature, stat) {
    let mult = 1
    switch (stat) {
        case "atk" :
            switch(nature) {
                case "lonely":
                case "brave" :
                case "adamant" :
                case "naughty" :
                    mult = 1.1
                    break
                case "bold":
                case "timid":
                case "modest":
                case "calm":
                    mult = 0.9
                    break
                default:
                    mult = 1
                    break
            }
            break
        case "def" :
            switch(nature) {
                case "bold":
                case "relaxed":
                case "impish":
                case "lax" :
                    mult = 1.1
                    break
                case "lonely":
                case "hasty":
                case "mild":
                case "gentle":
                    mult = 0.9
                    break
                default:
                    mult = 1
                    break
            }
            break
        case "spa" :
            switch(nature) {
                case "modest":
                case "mild":
                case "quiet":
                case "rash" :
                    mult = 1.1
                    break
                case "adamant":
                case "impish":
                case "jolly":
                case "careful":
                    mult = 0.9
                    break
                default:
                    mult = 1
                    break
            }
            break
        case "sdf" :
            switch(nature) {
                case "calm":
                case "gentle":
                case "sassy":
                case "careful":
                    mult = 1.1
                    break
                case "naughty":
                case "lax":
                case "naive":
                case "rash":
                    mult = 0.9
                    break
                default:
                    mult = 1
                    break
            }
            break
        default:
            switch(nature) {
                case "timid":
                case "hasty":
                case "jolly":
                case "naive":
                    mult = 1.1
                    break
                case "brave":
                case "relaxed":
                case "quiet":
                case "sassy":
                    mult = 0.9
                    break
                default:
                    mult = 1
                    break
            }
    }
    const val = (0.5 * (2 * base + IV + EV / 4) + 5) * mult
    return Math.floor(val)
}