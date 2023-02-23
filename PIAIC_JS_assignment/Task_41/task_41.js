let megicians = ['David Blaine','Dynamo','Criss Angel']

function make_great(list){
    for (let i = 0; i < list.length; i++) {
        list[i] = `The great ${list[i]}`
    }
}
function show_magicians(list){

    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
}
make_great(megicians)
show_magicians(megicians)