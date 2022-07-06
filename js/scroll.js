window.addEventListener('scroll',e=>{

    let navbarObj = document.getElementById('navbar')
    let navbarClasses = navbarObj.classList
    let style = window.getComputedStyle(navbarObj)
    let height = style.getPropertyValue('height')
    console.log(parseInt(height))
    active_class = "menu_scrolled"

    if(pageYOffset>parseInt(height)) navbarClasses.add(active_class)
    else navbarClasses.remove(active_class)

    // let active_class = 'navbar_scrolled'
    // if(pageXOffset>400){
    //
    // }
})


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        console.log('click');
    });
