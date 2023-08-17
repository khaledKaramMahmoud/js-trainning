function getRecipe(recipe) {
  return new Promise(function (resolved, rejected) {
    const myHttp = new XMLHttpRequest();

    myHttp.open(
      "GET",
      `https://forkify-api.herokuapp.com/api/search?q=${recipe}`
    );
    myHttp.send();

    myHttp.addEventListener("load", function () {
      if (myHttp.readyState === 4 && myHttp.status === 200) {
        console.log(recipe);
        console.log(JSON.parse(myHttp.response));
        resolved();
      }else{
        rejected();
      }
    });
  });
}

function endMenu() {
  console.log("Hmmmmmm");
}
// catched only on error ex. when send pastaaa
function connectionErr(){
    console.log('connection error')
}

//i need pasta > beef > pizza

getRecipe('pasta')
.then(()=>getRecipe('beef'))
.then(()=>getRecipe('pizza'))
.then(()=>endMenu())
.catch(()=>connectionErr())