const route = {
	test_preview: '../test2.html',
	about_test: '../about-test.html',
	buttons: '../buttons.html',
};
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
	const url = route[button.id];
	button.addEventListener('click', (evt) => {
		window.location.href = url;
	});
});
