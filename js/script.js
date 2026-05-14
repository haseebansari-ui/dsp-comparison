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


