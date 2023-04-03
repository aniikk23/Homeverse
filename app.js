
let loadMoreBtn = document.querySelector('#btn');
let currentHome = 2;

loadMoreBtn.onclick = () =>{
   let homes = [...document.querySelectorAll('.container .home-container .home')];
   for (var i = currentHome; i < currentHome + 2; i++){
      homes[i].style.display = 'inline-block';
   }
   currentHome += 2;

   if(currentHome >= homes.length){
      loadMoreBtn.style.display = 'none';
   }
}



const homes = [
   {
       id:1,
       description: "Estaing",
       country: "France",
       img: "./assets/swiper-house.png"
   },
   {
       id:2,
       description: "Estaing",
       country: "Italy",
       img: "./assets/Home-1.png"
   },
   {
      id:3,
      description: "Villa",
      country: "USA",
      img: "./assets/Home-2.png"
   },
   {
      id:4,
      description: "Villa",
      country: "Georgia",
      img: "./assets/Home-3.png"
   },
   {
      id:5,
      description: "Mansion",
      country: "Turkey",
      img: "./assets/Home-4.png"
   },
]
const img = document.querySelector(".swiper-img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const description = document.getElementById("description");
const country = document.getElementById("country");

currentItem = 0;

function showHome(home){
   const item = homes[home];
   img.src = item.img;
   description.textContent = item.description;
   country.textContent = item.country

}
prevBtn.addEventListener("click", function(){
   currentItem--;
   if(currentItem <= 0){
       currentItem = homes.length - 1;
   }
   showHome(currentItem)
})

nextBtn.addEventListener("click", function(){
   currentItem++;
   if(currentItem > homes.length - 1){
       currentItem = 0;
   }
   showHome(currentItem)
})
window.addEventListener("DOMContentLoaded",function(){
   showHome(currentItem)
});

const lArrow = document.querySelector('.left-arrow')
const rArrow = document.querySelector('.right-arrow')
const homeimg = document.querySelector(".img")

lArrow.addEventListener("click", function(){
   currentItem--;
   if(currentItem <= 0){
       currentItem = homes.length - 1;
   }
   showHomeImg(currentItem)
})

rArrow.addEventListener("click", function(){
   currentItem++;
   if(currentItem > homes.length - 1){
       currentItem = 0;
   }
   showHomeImg(currentItem)
})

function showHomeImg(home){
   const item = homes[home];
   homeimg.src = item.img;
}