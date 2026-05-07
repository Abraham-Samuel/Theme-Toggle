const toggleButtons = document.querySelectorAll(".theme-toggle")

if (localStorage.getItem("theme") === "dark") {
	document.body.classList.add("dark")
}

toggleButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const nextTheme = document.body.classList.contains("dark")
			? "light"
			: "dark"

		document.body.classList.toggle("dark")
		localStorage.setItem("theme", nextTheme)
        console.log("click", nextTheme)
	})
})