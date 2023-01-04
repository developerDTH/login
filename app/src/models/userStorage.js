"use strict"

class UserStorage{
    static #users={
        id : ["scratchDTH","DeveloperDTH","scratchDTH2"],
        passwd:["shy030902*","DeveloperDTH0202!","ush030902!"],
        name:["승호","승호","승호"]
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx]
            return newUser;
        },{});
        return userInfo;
    }
    static save(userInfo){
        const user = this.#users;
        user.id.push(userInfo.id);
        user.name.push(userInfo.name);
        user.passwd.push(userInfo.passwd);
        
    }
}
module.exports = UserStorage;