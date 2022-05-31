const route = {
	courses_resume: '../liza-alert-cynological-direction/index.html',
	index_back: '../liza-alert-cynological-direction/courses.html',
	index_next: '../liza-alert-cynological-direction/test-preview.html',
	test_preview_back: '../liza-alert-cynological-direction/index.html',
	test_preview_start: '../liza-alert-cynological-direction/test.html',
	view_conditions: '../liza-alert-cynological-direction/about-test.html',
	test_back: '../liza-alert-cynological-direction/test-preview.html',
	back_to_test: '../liza-alert-cynological-direction/test.html',
	about_test_back: '../liza-alert-cynological-direction/test.html',
	badtest_view_conditions: '../liza-alert-cynological-direction/about-test.html',
	test_reset: '../liza-alert-cynological-direction/test.html',
	badgoodtest_back: '../liza-alert-cynological-direction/index.html',
	goodtest_view_conditions: '../liza-alert-cynological-direction/about-test.html',
	goodtest_next: '../liza-alert-cynological-direction/greet.html',
	greet_back: '../liza-alert-cynological-direction/goodtest.html',
	greet_end: '../liza-alert-cynological-direction/courses.html',
	sorry_back: '../liza-alert-cynological-direction/badtest.html',
	sorry_end: '../liza-alert-cynological-direction/courses.html',
	test_choose_variant_view_conditions: '../liza-alert-cynological-direction/about-test.html',
	chose_variant_back: '../liza-alert-cynological-direction/greet.html',
	buttons: '../liza-alert-cynological-direction/buttons.html',
};
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	const url = route[button.id];
	button.addEventListener('click', (evt) => {
		window.location.href = url;
	});
});
