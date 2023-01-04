"use strict";



const id = document.querySelector("#id"),
passwd = document.querySelector("#passwd"),
loginbtn = document.querySelector("#button");

loginbtn.addEventListener("click",register);

function register(){
    const req ={
        id:id.value,
        passwd:passwd.value
    };
    fetch("/login",{
        method : "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(req)            
    })
    .then((res)=> res.json())
    .then((res)=>{
        if(res.success){
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.err(new Error("로그인중 에러발생"));
    })
}