
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu
    const burger = document.querySelector('.burger')
    const mobileMenu = document.querySelector('.mob-nav')
    const toggleMenu = () =>{
        mobileMenu.classList.toggle('active')
        burger.classList.toggle('active')
    }
    burger.addEventListener('click', function (e) {
        e.stopPropagation()
        toggleMenu()
    })
    document.addEventListener('click', function (e) {
        const target = e.target
        const its_menu = target == mobileMenu || mobileMenu.contains(target);
        const its_btnMenu = target == burger;
        const menu_is_active = mobileMenu.classList.contains('active');

        if (!its_menu && !its_btnMenu && menu_is_active) {
            toggleMenu();
        }
    })

    //Validate Email
    // const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    // const email = document.querySelector('#email')
    // email.addEventListener('input', updateInput)
    // function validateEmail(value) {
    //     return emailRegexp.test(value);
    // }
    // function updateInput() {
    //     if (validateEmail(email.value)) {
    //         console.log('Valid')
    //     } else {
    //         console.log('Unvalid')
    //     }
    // }
})