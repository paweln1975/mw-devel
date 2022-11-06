btn = document.querySelector(".arrow")
item1 = document.querySelector(".item1")
arrow = document.querySelector(".fas")

function btnAction_click() {
	if (item1.classList.contains("show")) {
		item1.classList.remove("show")
		arrow.style.transform = "rotate(0)"
	} else {
		item1.classList.add("show")
		arrow.style.transform = "rotate(180deg)"
	}
}

btn.addEventListener("click", btnAction_click)
