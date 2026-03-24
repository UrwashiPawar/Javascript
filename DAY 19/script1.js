const input_name =document.querySelector("#input-name");
const btn_find =document.querySelector("#btn-find");

btn_find.addEventListener("click",()=>{
    const value = input_name.value;

    alert(value);
})