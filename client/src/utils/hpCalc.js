export default function hpCalc (base, EV) {
    const val = 0.5 * (2 * base + 31 + EV / 4) + 60
    return Math.round(val)
}