export function createAbout(aDiv){
const aboutDiv = document.createElement("div")
const aboutHeader = document.createElement("header")
const aboutDesc = document.createElement("p")

aboutHeader.innerHTML = "About us"
aboutDesc.innerHTML = "Welcome to *Sabor de Portugal*, where we celebrate the heart of Portuguese cuisine with a focused menu of beloved classics. Our restaurant specializes in three iconic dishes: the creamy, flaky Pastel de Nata, the indulgent Francesinha, and the savory Bacalhau. Each dish is crafted with authentic recipes and the finest ingredients to deliver an unforgettable taste of Portugal. At *Sabor de Portugal*, we believe in quality over quantity, offering a true taste of Portuguese tradition in every bite. Join us for a culinary journey that highlights the essence of Portugal’s rich food culture."

aboutDiv.appendChild(aboutHeader)
aboutHeader.appendChild(aboutDesc)
aDiv.appendChild(aboutDiv)
}