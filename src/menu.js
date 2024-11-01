export function createMenu(ultimateParent){
const menuDiv = document.createElement("div")
const menuHeader = document.createElement("header")
menuHeader.innerHTML = "Browse our optimo range of optimal com e dah. Gracias"

const menuItem1 = document.createElement("header")
const menuItem2 = document.createElement("header")
const menuItem3 = document.createElement("header")
menuItem1.innerHTML = "BOOMING Bacalhau";
menuItem2.innerHTML = "FABULOUS Francesinha";
menuItem3.innerHTML = "PERFECT Pastel de Nata";

const menuDesc1 = document.createElement("p")
const menuDesc2 = document.createElement("p")
const menuDesc3 = document.createElement("p")
menuDesc3.innerHTML = "Delight in our Pastel de Nata: a golden, flaky pastry filled with a creamy, custard center, lightly caramelized on top for a perfect balance of sweet and rich flavors. Enjoy it warm, dusted with a hint of cinnamon and powdered sugar, for an irresistible treat that melts in your mouth."
menuDesc2.innerHTML = "Savor our Francesinha, a hearty Portuguese classic featuring tender layers of steak, ham, and sausage, all enveloped in a rich, savory tomato-beer sauce. Topped with melted cheese and baked until bubbling, it's served with a side of crispy fries. A comforting, indulgent meal that's simply irresistible."
menuDesc1.innerHTML = "Experience our Bacalhau, a traditional Portuguese dish featuring tender, salted cod sautéed to perfection. Served with roasted potatoes, olives, and a zesty garlic-herb sauce, this classic seafood delicacy delivers rich, savory flavors in every bite. A true taste of Portugal, perfectly balancing simplicity and sophistication." 

menuDiv.appendChild(menuHeader)
menuDiv.appendChild(menuItem1)
menuDiv.appendChild(menuItem2)
menuDiv.appendChild(menuItem3)
menuItem1.appendChild(menuDesc1)
menuItem2.appendChild(menuDesc2)
menuItem3.appendChild(menuDesc3)
ultimateParent.appendChild(menuDiv)
}