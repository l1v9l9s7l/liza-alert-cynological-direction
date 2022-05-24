const filterBlockHead = document.querySelectorAll(".sidebar__block-head");

filterBlockHead.forEach(item => {
	item.addEventListener("click", function (evt) {
		evt.stopPropagation();
		item.parentNode.classList.toggle("sidebar__block_active");
	});
});