let trendFood=document.querySelectorAll(".trendFood");
let foodCard=document.querySelectorAll(".foodCard");


let count=0;
console.log(trendFood);

trendFood.forEach((imgs,index)=>{
imgs.style.left=`${index*100}%`;
})

const myFun=()=>{
    trendFood.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count*100}%)`
    })
}

setInterval(()=>{
    count++;
    if(count==trendFood.length){
        count=0;
    }
myFun()
},2000);

//food detail

foodCard.forEach((curCard)=>{
    curCard.addEventListener("click",function(){
        console.log(curCard);

        let div=document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h2>Food Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium voluptatem saepe, magnam nihil quod aliquam beatae? Unde itaque quo placeat aliquam?</p>
        `
        document.querySelector("body").appendChild(div) 
        document.querySelector("#icon").addEventListener("click",function(){
            div.remove();
        })
    })
})