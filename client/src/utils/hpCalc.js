export default function hpCalc (base, EV, IV) {
    const val = 0.5 * (2 * base + IV + EV / 4) + 60
    return Math.round(val)
}