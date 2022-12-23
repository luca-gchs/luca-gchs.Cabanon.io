const chk = document.querySelector('.checkbox');
const descriptions = document.querySelectorAll('.descr');
const descr = document.querySelectorAll('.title');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	descriptions.forEach(item => {
		item.classList.toggle('light')
	})
	descr.forEach(item =>{
		item.classList.toggle('light')
	})
});
