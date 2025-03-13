// Body Variables
const body = document.body;
let lastScroll = 0;

// Body Event Listener
window.addEventListener('scroll', () => {
	const currentScroll = window.scrollY;
	
	if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
		body.classList.add("scroll-down");
	}
	if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
		body.classList.remove("scroll-down");
	}
	
	lastScroll = currentScroll;
})
