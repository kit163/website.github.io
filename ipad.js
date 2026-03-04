const wrapper = document.querySelector('section');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const Rect = wrapper.getBoundingClientRect();
const noRect = noBtn.getBoundingClientRect();

noBtn.addEventListener("click", () => {
	const i = Math.floor(Math.random()*(Rect.width 
	- noRect.width)) +1;
	const j = Math.floor(Math.random()*(Rect.
	height - noRect.height)) +1;

	noBtn.style.left = i + 'px';
	noBtn.style.top = j + 'px';
});

const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

yesBtn.addEventListener("click", () => wrapper.classList.add("active"))
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"))
