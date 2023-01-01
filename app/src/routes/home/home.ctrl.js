"use strict";

const users={
    id : ["scratchDTH","DeveloperDTH","scratchDTH2"],
    passwd:["shy030902*","DeveloperDTH0202!","ush030902!"]
}
const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    login : (req, res)=>{
        res.render("home/login");
    },
}
const process = {
    login:(req,res)=>{
        const id = req.body.id,
        passwd = req.body.passwd;
        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.passwd[idx]===passwd){
                return res.json({
                    success:true,
                    
                });
            }
        }
        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다.",
            
        })
    }
}
module.exports={
    output,
    process
};


