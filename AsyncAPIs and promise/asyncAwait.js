// async function getRecipe(recipe) {
//     const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
//     const result = await response.json()
//     console.log(recipe)
//     console.log(result)
//   }
  
//   function endMenu() {
//     console.log("Hmmmmmm");
//   }
  
//   //i need pasta > beef > pizza

//   (async function () {
//     await getRecipe('pasta')
//     await getRecipe('bef')
//     await getRecipe('pizza')
//     await endMenu()
//   }())

async function getRecipe(recipe) {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
      if (!response.ok) {
        throw new Error(`ooooops! HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(recipe);
      console.log(result);
    } catch (error) {
      console.error(`Error fetching recipe : ${error.message}`);
    }
  }
  
  function endMenu() {
    console.log("Hmmmmmm");
  }
  
  (async function () {
    try {
      await getRecipe('pasdta');
      await getRecipe('beef');
      await getRecipe('pizza');
      await endMenu();
    } catch (error) {
      console.error(`Error occurred: ${error.message}`);
    }
  })();