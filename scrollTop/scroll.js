const span = document.querySelector(".up");

window.onscroll = function () {
//   if (this.scrollY >= 500) {
//     span.classList.add("show");
//   }else{
//     span.classList.remove("show");
//   }

  this.scrollY>=500?span.classList.add("show"):span.classList.remove("show")

  span.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
  }
};
