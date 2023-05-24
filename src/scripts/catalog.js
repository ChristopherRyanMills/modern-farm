let htmlString = ""
// iterates the array of harvested plants and creates an html element for each
export const Catalog = (harvestedArray) => {
    for (const food of harvestedArray) {
        htmlString += `<section class="plant">${food.type}</section>`
    }
    //applies the string to the html document under container class
    const mainHTML = document.querySelector(".container")
    mainHTML.innerHTML = htmlString
}