document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.getElementsByClassName('faq__item');
    for (let i = 0; i < faqItems.length; i++) {
        faqItems[i].addEventListener('click', function () {
            console.log(this.id)
            this.classList.toggle('active-question');
        });
    }

    const email = document.getElementById('email');
    email.value = 'example@email/com'

    const menuBtn = document.getElementById('menuBtn')
    const navClose = document.getElementById('navClose')

    const navList = document.getElementById('navList')

    menuBtn.addEventListener('click', () => {
        navList.classList.add('nav-open')
    });

    navClose.addEventListener('click', () => {
        navList.classList.remove('nav-open')
    });
});

