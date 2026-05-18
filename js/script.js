"use strict"

// accordian

const accordian = document.querySelectorAll('.contentBx');

for (let i = 0; i < accordian.length; i++) {
	accordian[i].addEventListener('click', function () {
		this.classList.toggle('active');
	});
}


// TABBER JS

const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const target = btn.dataset.tab;

        // REMOVE ACTIVE

        tabBtns.forEach(button => {
            button.classList.remove('active');
        });

        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // ADD ACTIVE

        btn.classList.add('active');

        document
            .getElementById(target)
            .classList.add('active');

    });

});


const menuBarOpen = document.querySelector(".other-nav-link ul");
const menuToggle = document.querySelector(".menue-bar-bx");

menuToggle.addEventListener("click", () => {
    menuBarOpen.classList.toggle("active");
});

const innerMenuBarOpen = document.querySelector(".other-nav-link ul .drop-down-bx .drop-down-menue");
const innerMenuToggle = document.querySelector(".inner-menue");

innerMenuToggle.addEventListener("click", () => {
    innerMenuBarOpen.classList.toggle("active");
});