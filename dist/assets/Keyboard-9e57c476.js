import{j as a}from"./index-b35b1ba8.js";const c=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","(",")"],i=({activeLetters:o,inactiveLetters:r,addGuessLetter:l,disabled:n=!1})=>a.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:c.map(t=>{const e=o.includes(t),s=r.includes(t);return a.jsx("button",{onClick:()=>l(t),className:`cursor-pointer bg-[#dae8ef] text-[#4776a2] hover:bg-[#4776a2] hover:text-[#dae8ef] duration-300 laptop:text-lg desktop:text-lg font-bold uppercase p-1 md:m-1 2xl:m-2 2xl:p-4 rounded-lg md:col-span-2 ${e?"bg-[hsl(200,100%,50%)] text-[white]":""} ${s?"opacity-30":""}`,disabled:e||s||n,children:t},t)})});export{i as default};
