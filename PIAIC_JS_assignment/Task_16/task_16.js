let guests = ["Ali", "Amir", "Talha", "Nasir"];
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, You are invited to dinner party`)
}
console.log(`${guests[0]} and ${guests[2]} are not coming`);

guests.splice(0, 1, "Umer");
guests.splice(2, 1, "Faizan");

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, You are invited to dinner party`)
}

console.log("I am inviting more guests to dinner because I found a bigger table")

guests.splice(2, 0, "Rizwan")
guests.unshift("Babar")
guests.push("Sharjeel")

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, You are invited to dinner party`)
}

console.log("we can invite only two people for dinner.")

let uninvited = guests.splice(0,guests.length-2)

for (let i = 0; i < uninvited.length; i++) {
    console.log(`I am sorry ${uninvited[i]} I can not invite you to dinner`)
}

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]} you're still invited.`)
}

guests.splice(0,guests.length)
console.log(guests)
