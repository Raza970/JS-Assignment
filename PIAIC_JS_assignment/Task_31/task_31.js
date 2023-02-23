let current_users = ["Ali", "Amir", "Talha", 'Kami', "Nasir"];
let new_users = ["Umer", "daniyal", "ali", "umair", "kami"]
for (let i = 0; i < new_users.length; i++) {
    let duplicate;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            duplicate = true;
            break;
        }
        else {
            duplicate = false;
        }

    }
    if (duplicate) {
        console.log(`${new_users[i]} is not available, You will need to enter a new username`)
    }
    else {
        console.log(`${new_users[i]}, username is available.`)
    }
}