function getRecipe(recipe,callback) {
  const myHttp = new XMLHttpRequest();

  myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
  myHttp.send();

  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState === 4 && myHttp.status === 200) {
      console.log(recipe);
      console.log(JSON.parse(myHttp.response));
      callback()
    }
  });
}

  function endMenu() {
    console.log('Hmmmmmm')
  }


//i need pasta > beef > pizza

getRecipe('pasta',function(){
    getRecipe('beef',function(){
        getRecipe('pizza',function(){
            endMenu()
        })
    })
})