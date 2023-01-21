import "./style.css"

const mobileNavBtn = document.querySelector("#mobileNavBtn")
const mobileNav = document.querySelector("#mobileNav")
const navLinks = document.querySelectorAll(".nav-link")
const closeBtn = document.querySelector("#closeBtn")
const navBkg = document.querySelector(".nav-bkg")

const toggleOpenAttribute = (arrayOfItems) => {
   arrayOfItems.forEach((i) => {
		const isOpen = i.hasAttribute("open")
      isOpen ? i.removeAttribute("open") : i.setAttribute("open", "")
	})
}

const toggleTabIndexes = (arrayOfItems) => {
	arrayOfItems.forEach((i) => {
      const isTabbable = i.tabIndex > -1
		isTabbable
         ? i.setAttribute("tabindex", "-1")
			: i.setAttribute("tabindex", "0")
	})
}

const handleMobileNavClick = (e) => {
	const isOpen = JSON.parse(e.target.getAttribute("aria-expanded"))
	e.target.setAttribute("aria-expanded", !isOpen)
	toggleOpenAttribute([mobileNav, navBkg])
	toggleTabIndexes([...navLinks, closeBtn])
}