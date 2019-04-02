export function sum(...rest) {
    return rest.reduce( (init, val) => init + val)
}