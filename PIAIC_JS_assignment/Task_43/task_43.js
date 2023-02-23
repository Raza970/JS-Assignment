function make_sandwich(...list) {
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        console.log(`we are adding ${list[i]} to your sandwich`)
    }
}
make_sandwich('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon')
make_sandwich('turkey', 'apple slices', 'honey mustard')
make_sandwich('peanut butter', 'strawberry jam')