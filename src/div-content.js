export function createContent(){
console.log("CHRIST IS KING")
const contentParent = document.getElementById("content")
const header1 = document.createElement("header")
header1.setAttribute("id","header1")
header1.innerHTML = "OUR FRANCESINHA"
contentParent.appendChild(header1)
const para = document.createElement("p")
para.innerHTML = "Order your francesinha via Uber Eats"
contentParent.appendChild(para)
const order_button = document.createElement("button")
order_button.innerHTML = "ORDER"
order_button.setAttribute("id","order_button")
contentParent.appendChild(order_button)
}
       
/*<div id="content"> 
<nav>
    <button id="home-sect">Home</button>
    <button id="menu-sect">Menu</button>
    <button id="about-sect">About us</button>
</nav>
<header>Experience an experience that you can only experience by having an experience with us</header>
    <p>At our restaurant, we specialize in delivering an unparalleled taste of Portugal with our focus on three iconic dishes: Francesinha, Pastel de Nata, and Bacalhau. Our Francesinha, a rich and indulgent sandwich layered with tender steak, ham, and sausage, is smothered in a savory, spicy sauce that perfectly balances flavor and heat. Each bite offers a unique blend of textures and tastes, making it a standout choice for those craving comfort food with a gourmet twist.
        Our Pastel de Nata, a beloved Portuguese custard tart, boasts a flaky, golden crust with a silky, egg-custard filling that is delicately spiced and caramelized. It’s the perfect sweet ending to any meal.
        Additionally, our Bacalhau, a traditional salt cod dish, is prepared with meticulous care, ensuring a taste that is both authentic and delicious. Our dedication to quality ingredients and traditional recipes makes our restaurant a culinary gem, bringing the heart of Portugal to every plate.</p>
</div>*/