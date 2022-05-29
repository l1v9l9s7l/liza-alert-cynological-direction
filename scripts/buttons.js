const route = {
	courses_resume: '../index.html',
	index_back: '../courses.html',
	index_next: '../test-preview.html',
	test_preview_back: '../index.html',
	test_preview_start: '../test.html',
	view_conditions: '../about-test.html',
	test_back: '../test-preview.html',
	back_to_test: '../test.html',
	about_test_back: '../test.html',
	badtest_view_conditions: '../about-test.html',
	test_reset: '../test.html',
	badgoodtest_back: '../index.html',
	goodtest_view_conditions: '../about-test.html',
	goodtest_next: '../greet.html',
	greet_back: '../goodtest.html',
	greet_end: '../courses.html',
	sorry_back: '../badtest.html',
	sorry_end: '../courses.html',
	test_choose_variant_view_conditions: '../about-test.html',
	chose_variant_back: '../greet.html',
	buttons: '../buttons.html',
};
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	const url = route[button.id];
	button.addEventListener('click', (evt) => {
		window.location.href = url;
	});
});
