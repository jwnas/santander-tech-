const user = {
    name: "SheLDoN CoOper",
    mail: "ShEly@maiL.com",
    age: 23,
    address: "Passadina"
};

// solução simples
/*
for (const key in user) {
    if (key === "name" || key === "mail") {
        user[key] = user[key].toLowerCase();
    }
};
*/

// solução elaborada
for (const key in user) {
    if (key === "name") {
        const names = user[key].split(" ");
        user[key] = "";
        
        for ( const name of names) {
            const normalName = name.toLowerCase();
            const [firstLetter, ... restName] = normalName;
            
            user[key] = user[key] + " " + firstLetter.toUpperCase() + restName.join("");
            user[key] = user[key].trim();
        }
    }

    if (key === "mail") {
        user[key] = user[key].toLowerCase();
    }
};

console.log(user);