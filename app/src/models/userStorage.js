"use strict"

const fs = require("fs").promises;
class UserStorage{
    static #getUserInfo(){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info)=>{
                newUser[info] = users[info][idx]
                return newUser;
                },{});
                return userInfo;
    }    
    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        
        return newUsers;
    }
    static getUserInfo(id){
        return fs.readFile("./src/databases/users.json")
            .then((data)=>{
                return this.#getUserInfo()
            })
            .catch((err)=> console.error);
    }
    
    static save(userInfo){
        //const user = this.#users;
        user.id.push(userInfo.id);
        user.name.push(userInfo.name);
        user.passwd.push(userInfo.passwd);
        
    }
}
module.exports = UserStorage;