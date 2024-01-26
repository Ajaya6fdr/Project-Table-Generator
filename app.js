let btn = document.querySelector("button");
let inp = document.querySelector("input");
btn.addEventListener("click",function(){
  let div = document.createElement("div");
  div.classList.add("parent");
  document.querySelector("body").append(div);
  let div1 = document.createElement("div");
  div1.classList.add("child");
  div.append(div1);
  let n = inp.value;
  for(let i = 1; i <= 10;i++){
     let ans = i*n;
     let li = document.createElement("li");
     li.innerText = ans;
     div1.appendChild(li);
  }
  inp.value = "";
})



















