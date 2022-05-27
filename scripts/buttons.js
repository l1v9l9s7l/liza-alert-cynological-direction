const route = {
	index_next: '../test-preview.html',
	test_preview_back: '../index.html',
	test_preview_start: '../test.html',
	test_back: '../test-preview.html',
	about_test_back: '../test.html',
	test_reset: '../test.html',
	badgoodtest_back: '../about-test.html',
	goodtest_next: '../greet.html',
	greet_back: '../goodtest.html',
	greet_end: '../test-chose-variant.html',
	chose_variant_back: '../greet.html',
	buttons: '../buttons.html',
};
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
	const url = route[button.id];
	button.addEventListener('click', (evt) => {
		window.location.href = url;
	});
});
