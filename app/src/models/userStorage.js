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
}
module.exports = UserStorage;