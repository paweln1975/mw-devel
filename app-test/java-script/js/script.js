const name = "Fullstack developer"
const age = 47
console.log(name)
console.log("I'm " + name + " and " + age + " years old")

const p = document.createElement("p")
p.textContent = "Document Object Model"
e = document.getElementById("paragraph_one")
e.append(p)

const tab = ["red", "blue", "green"]

function capitalize(s) {
	return s.toUpperCase()
}
for (let i = 0; i < tab.length; i++) {
	console.log(capitalize(tab[i]))
}

let itemNumber = 0
let fontSize = 20

function btnAction_click() {
	const liItems = document.querySelectorAll(".li-item")

	if (itemNumber == liItems.length) {
		itemNumber = 1
	} else {
		itemNumber++
	}

	liItems.forEach(element => {
		if (element.textContent.includes(itemNumber)) {
			console.log(element.textContent)
			element.classList.add("red")
		} else {
			element.classList.remove("red")
		}
	})
}

function btnActionFont(grow) {
	if (grow) {
		fontSize++
	} else {
		if (fontSize > 1) {
			fontSize--
		}
	}
	const liItems = document.querySelectorAll(".li-item")

	liItems.forEach(element => {
		if (element.textContent.includes(itemNumber)) {
			element.style.fontSize = fontSize + "px"
		}
	})
}

function btnAction_fontPlus() {
	btnActionFont(true)
}

function btnAction_fontMinus() {
	btnActionFont(false)
}

btn1 = document.getElementById("btn-action")
btn1.addEventListener("click", btnAction_click)

btnPlus = document.getElementById("btn-action-font-plus")
btnMinus = document.getElementById("btn-action-font-minus")

btnPlus.addEventListener("click", btnAction_fontPlus)
btnMinus.addEventListener("click", btnAction_fontMinus)

btnAction_click()
