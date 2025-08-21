const get_input=document.querySelector("#input_value")
const btn=document.querySelector("#btn")
const result=document.querySelector("#list")
const cancel=document.querySelector("#cancel")

btn.addEventListener("click",()=>{
let news=document.createElement("p")
let delet_btn=document.createElement("button")
delet_btn.textContent="X"

delet_btn.onclick = function(){
    news.remove()
    delet_btn.className="del_btn"
    delet_btn.remove()
 
}
news.textContent=get_input.value
result.append(news,delet_btn)
result.style.display="flex"
get_input.value=""
})



