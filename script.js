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

// FAQ Variables
const faqQuestion1 = document.getElementById("faqQuestion1");
const faqQuestion2 = document.getElementById("faqQuestion2");
const faqQuestion3 = document.getElementById("faqQuestion3");
const faqQuestion4 = document.getElementById("faqQuestion4");
const faqQuestion5 = document.getElementById("faqQuestion5");
const faqQuestion6 = document.getElementById("faqQuestion6");

const faqAnswer1 = document.getElementById("faqAnswer1");
const faqAnswer2 = document.getElementById("faqAnswer2");
const faqAnswer3 = document.getElementById("faqAnswer3");
const faqAnswer4 = document.getElementById("faqAnswer4");
const faqAnswer5 = document.getElementById("faqAnswer5");
const faqAnswer6 = document.getElementById("faqAnswer6");

// Sidebar Menu Functions
function openSidebarMenu() {
	sidebarMenu.classList.remove("hide");
}
function closeSidebarMenu() {
	sidebarMenu.classList.add("hide");
}

// FAQ Functions
function faqQuestionClick(faqAnswer) {
	if (faqAnswer.classList.contains("hide")) {
		faqAnswer.classList.remove("hide");
		const openAnswer = document.querySelectorAll("p.open");
		openAnswer.forEach(answer => {
			answer.classList.remove("open");
			answer.classList.add("hide");
		})
		faqAnswer.classList.add("open");
	} else if (faqAnswer.classList.contains("open")) {
		faqAnswer.classList.remove("open");
		faqAnswer.classList.add("hide");
	}
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
sidebarMenuIcon.addEventListener("click", openSidebarMenu);
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

// FAQ Question Event Listeners
faqQuestion1.addEventListener("click", () => {
	faqQuestionClick(faqAnswer1);
})
faqQuestion2.addEventListener("click", () => {
	faqQuestionClick(faqAnswer2);
})
faqQuestion3.addEventListener("click", () => {
	faqQuestionClick(faqAnswer3);
})
faqQuestion4.addEventListener("click", () => {
	faqQuestionClick(faqAnswer4);
})
faqQuestion5.addEventListener("click", () => {
	faqQuestionClick(faqAnswer5);
})
faqQuestion6.addEventListener("click", () => {
	faqQuestionClick(faqAnswer6);
})
