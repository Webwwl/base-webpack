function add(...rest) {
    return rest.reduce( (a, b) => a + b)
}

export  { add }