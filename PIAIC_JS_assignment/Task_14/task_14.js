let guests = ["Ali", "Amir", "Talha", "Nasir"];
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, You are invited to dinner party`)
}
console.log(`${guests[0]} and ${guests[2]} are not coming`);

guests.splice(0,1,"Umer");
guests.splice(2,1,"Faizan");

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, You are invited to dinner party`)
}
