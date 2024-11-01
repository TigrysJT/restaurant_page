import { createContent } from "./div-content";
const div = document.getElementById("content")
import { createMenu } from "./menu";
import { createAbout } from "./about";
import "./style.css"

const homeButton = document.getElementById("home-sect")
const menuButton = document.getElementById("menu-sect")
const aboutButton = document.getElementById("about-sect")

createContent()

homeButton.addEventListener("click", () => {
    clearPage()
    createContent()
})
menuButton.addEventListener("click", () => {
    clearPage()    
    createMenu(div)
})
aboutButton.addEventListener("click", () => {
    clearPage()
    createAbout(div)
})
function clearPage(){
    div.innerHTML = ""
}