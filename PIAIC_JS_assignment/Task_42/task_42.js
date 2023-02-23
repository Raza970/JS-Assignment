let megicians = ['David Blaine','Dynamo','Criss Angel']

function make_great(list){
    let great_megicians = []
    for (let i = 0; i < list.length; i++) {
         great_megicians[i]= `The great ${list[i]}`
    }
    return great_megicians
}
function show_magicians(list){

    for (let i = 0; i < list.length; i++) {
        console.log(list[i])
    }
}
let great_megicians = make_great(megicians)
show_magicians(megicians)
show_magicians(great_megicians)