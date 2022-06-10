const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Guilherme", "Admin");
usuarios.set("Jorge", "User");
usuarios.set("Natália", "Admin");

function getAdmins(map) {
    let admins = [];
    
    for ([key, value] of map){
        if (value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(usuarios));