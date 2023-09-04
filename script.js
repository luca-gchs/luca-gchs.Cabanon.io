// dark mode


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



// switch entre login et signup




const formContainer = document.querySelector(".form_container"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide"); // constante nommées puis dirigées dans le code avec query


// montrer le mdp ou pas en cliquant 

pwShowHide.forEach((icon) => {
	icon.addEventListener("click", () => {
		let getPwInput = icon.parentElement.querySelector("input");
		if(getPwInput.type === "password"){
			getPwInput.type = "text";
			icon.classList.replace("uil-eye-slash" , "uil-eye");
		}else{
			getPwInput.type = "password";
			icon.classList.replace("uil-eye" , "uil-eye-slash");
		}
	});
});

signupBtn.addEventListener("click", (e) => {
	e.preventDefault();
	formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
	e.preventDefault();
	formContainer.classList.remove("active");
}); // action perfomées avec click sur les constantes 
