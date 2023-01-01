"use strict";

const { json } = require("express");

const id = document.querySelector("#id"),
passwd = document.querySelector("#passwd"),
loginbtn = document.querySelector("button");

loginbtn.addEventListener("click",login);

function login(){
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
    });
}