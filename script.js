const chk = document.querySelector('.checkbox');
const descriptions = document.querySelectorAll('.descr');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	descriptions.forEach(item => {
		item.classList.toggle('light')
	})
});
