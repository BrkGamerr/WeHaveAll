// Body Variables
const body = document.body;
let lastScroll = 0;

// Sidebar Menu Variables
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarMenuIcon = document.getElementById("sidebarMenuIcon");
const sidebarMenuFeaturesButton = document.getElementById("sidebarMenuFeaturesButton");
const sidebarMenuPlansButton = document.getElementById("sidebarMenuPlansButton");
const sidebarMenuReviewsButton = document.getElementById("sidebarMenuReviewsButton");
const sidebarMenuContactButton = document.getElementById("sidebarMenuContactButton");
const sidebarMenuFAQButton = document.getElementById("sidebarMenuFAQButton");
const sidebarMenuClosingButton = document.getElementById("sidebarMenuClosingButton");

// Sidebar Menu Function
function closeSidebarMenu() {
	sidebarMenu.style.display = "none";
}

// Body Event Listener
window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.add("scroll-down");
	}
	if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-down");
	}
	lastScroll = currentScroll;
})

// Sidebar Menu Event Listeners
sidebarMenuIcon.addEventListener("click", () => {
	const sidebarMenu = document.querySelector(".sidebar-menu");
	sidebarMenu.style.display = "flex";
})
sidebarMenuFeaturesButton.addEventListener("click", () => {
	document.getElementById("featuresSection").scrollIntoView({behavior: "smooth"});
	closeSidebarMenu();
})
sidebarMenuPlansButton.addEventListener("click", () => {
	document.getElementById("pricingSection").scrollIntoView({behavior: "smooth"});
	closeSidebarMenu();
})
sidebarMenuReviewsButton.addEventListener("click", () => {
	document.getElementById("reviewsSection").scrollIntoView({behavior: "smooth"});
	closeSidebarMenu();
})
sidebarMenuContactButton.addEventListener("click", () => {
	document.getElementById("contactSection").scrollIntoView({behavior: "smooth"});
	closeSidebarMenu();
})
sidebarMenuFAQButton.addEventListener("click", () => {
	document.getElementById("faqSection").scrollIntoView({behavior: "smooth"});
	closeSidebarMenu();
})
sidebarMenuClosingButton.addEventListener("click", closeSidebarMenu)
