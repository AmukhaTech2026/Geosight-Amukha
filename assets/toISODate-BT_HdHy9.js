function o(n){if(!n)return"";const t=new Date(n),e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${e}-${r}-${a}`}export{o as t};
