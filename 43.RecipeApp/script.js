let res=document.getElementById("result")
let btn=document.getElementById("btn")
let url="https://www.themealdb.com/api/json/v1/1/search.php?s="
let ui=document.getElementById('usrinp')
fetch(url+"big mac").then((response)=>response.json()).then((data)=>{
    let mymeal=data.meals[0]
    let count=1
    let incredients=[]
    for(let i in mymeal){
        let incredient=""
        let measure=""
        if(i.startsWith("strIncredient") && mymeal[i])
        {
            incredient=mymeal[i]
            measure=mymeal[`strMeasure`+count]
            count += 1
            incredients.push(`${measure} ${incredient}`)

        }

    }
    res.innerHTML=`<img src=${mymeal.strMealThumb}>
    <div class="details">
    <h2>${mymeal.strMeal}</h2>  
    <h2>${mymeal.strArea}</h2>  
    </div>
    <div class="incred-con"></div>
    <div class="recipe">
    <button id="hide-recipe>X</button>
    <pre id="instructions">${mymeal.strInstructions}</pre>
    </div>
      `
})