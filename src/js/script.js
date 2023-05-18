
// resive the screen when the page loads
window.addEventListener("load", () => {

    let screen_max = screen.width;

    if(screen_max < 922) {

        let container = document.querySelector('.container-fluid');

        container.classList.remove('container-fluid');

        container.classList.add('container');
        
    }


})

// first work on view capabilities
document.getElementsByClassName("para-two")[0].addEventListener("mouseenter", () => {

    document.querySelector('.left-arr').style.paddingLeft = "20px";

    document.querySelector('.left-arr').style.color = "#F2B760";

    document.querySelector('.left-arr').style.transition = "padding-left 3s, color 3s";


})

document.getElementsByClassName("para-two")[0].addEventListener("mouseout", () => {
    
    document.querySelector('.left-arr').style.paddingLeft = "0px";

    document.querySelector('.left-arr').style.color = "#252525";

    document.querySelector('.left-arr').style.transition = "padding-left 3s, color 3s";


})


let box = document.querySelectorAll('.container-one div');
// loop through all the boxes and add mouse in and out
for(let i = 0; i < box.length; i++) {

    document.querySelectorAll('.container-one div')[i].addEventListener('mouseenter', () => {

        if( i == 0) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "url('./assets/Union.png')"; 

            box_one.style.backgroundRepeat = "no-repeat";

            box_one.style.backgroundPosition = "center";

            box_one.style.backgroundSize = "cover";

            box_one.style.backgroundColor = "transparent"; 

            box_one.childNodes[1].style.opacity = "0"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            box_one.childNodes[3].style.paddingLeft = "20px";

            box_one.childNodes[3].style.paddingRight = "40px";


            box_one.childNodes[3].innerHTML = `Design<span class='first-span'> & Developement</span>
            <span class='second-span'>Solve complex problems and accelerate the speed of developemt</span>
            <span class='learn-more'>Learn More</span>`;

            

            
            
        }

        if( i == 1) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "url('./assets/Union1.png')"; 

            box_one.style.backgroundRepeat = "no-repeat";

            box_one.style.backgroundPosition = "center";

            box_one.style.backgroundSize = "cover";

            box_one.style.backgroundColor = "transparent"; 

            box_one.childNodes[1].style.opacity = "0"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            let screen_max = screen.width;

            if(screen_max < 990) {
                box_one.childNodes[3].style.paddingLeft = "20px";

                box_one.childNodes[3].style.paddingRight = "40px";
            } else {

                box_one.childNodes[3].style.paddingLeft = "60px";

                box_one.childNodes[3].style.paddingRight = "10px";

            }


            box_one.childNodes[3].innerHTML = `Materials <span class="first-span">Expertise</span>
            <span class='second-span'>Navigate Materials Compatibilities and performance</span>
            <span class='learn-more'>Learn More</span>`;

            

            
            
        }

        if( i == 2) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "url('./assets/Union2.png')"; 

            box_one.style.backgroundRepeat = "no-repeat";

            box_one.style.backgroundPosition = "center";

            box_one.style.backgroundSize = "cover";

            box_one.style.backgroundColor = "transparent"; 

            box_one.childNodes[1].style.opacity = "0"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            let screen_max = screen.width;

            if(screen_max < 990) {
                box_one.childNodes[3].style.paddingLeft = "20px";

                box_one.childNodes[3].style.paddingRight = "10px";
            } else {

                box_one.childNodes[3].style.paddingLeft = "65px";

                box_one.childNodes[3].style.paddingRight = "25px";

            }


            box_one.childNodes[3].innerHTML = `Complex <span class="first-span">Componenets</span>
            <span class='second-span'>An industry leader in manufacture of complex componenets and assemblies</span>
            <span class='learn-more'>Learn More</span>`;

            

            
            
        }

        if( i == 3) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "url('./assets/Union3.png')"; 

            box_one.style.backgroundRepeat = "no-repeat";

            box_one.style.backgroundPosition = "center";

            box_one.style.backgroundSize = "cover";

            box_one.style.backgroundColor = "transparent"; 

            box_one.childNodes[1].style.opacity = "0"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            let screen_max = screen.width;

            if(screen_max < 990) {
                box_one.childNodes[3].style.paddingLeft = "20px";

                box_one.childNodes[3].style.paddingRight = "60px";
            } else {

                box_one.childNodes[3].style.paddingLeft = "65px";

                box_one.childNodes[3].style.paddingRight = "20px";

            }

            box_one.childNodes[3].innerHTML = `Manufacturing<span class="first-span"> & Assembly</span>
            <span class='second-span'>From initial commercial production to high-volume production, we’ve got you covered</span>
            <span class='learn-more'>Learn More</span>`;

            

            
            
        }

        if( i == 4) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "url('./assets/Union4.png')"; 

            box_one.style.backgroundRepeat = "no-repeat";

            box_one.style.backgroundPosition = "center";

            box_one.style.backgroundSize = "cover";

            box_one.style.backgroundColor = "transparent"; 

            box_one.childNodes[1].style.opacity = "0"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            let screen_max = screen.width;

            if(screen_max < 990) {

                box_one.childNodes[3].style.paddingLeft = "20px";

                box_one.childNodes[3].style.paddingRight = "60px";

            } else {

                box_one.childNodes[3].style.paddingLeft = "70px";

                box_one.childNodes[3].style.paddingRight = "20px";

            }


            box_one.childNodes[3].innerHTML = `Finished Device <span class="first-span">Services</span>
            <span class='second-span'>Comprehensive packaging and assembly, sterilization and logistics management services.</span>
            <span class='learn-more'>Learn More</span>`;

            

            
            
        }

    })

    document.querySelectorAll('.container-one div')[i].addEventListener('mouseleave', () => {

        if( i == 0) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "none"; 

            box_one.style.backgroundColor = "rgb(242,183,96)"; 

            box_one.childNodes[1].style.opacity = "1"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            box_one.childNodes[3].style.paddingLeft = "20px";

            box_one.childNodes[3].style.paddingRight = "0px";


            box_one.childNodes[3].innerHTML = `Design<span class='first-span'> & Developement</span>`;

            

            
            
        }

        if( i == 1) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "none"; 

            box_one.style.backgroundColor = "rgb(37,37,37)"; 

            box_one.childNodes[1].style.opacity = "1"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            box_one.childNodes[3].style.paddingLeft = "20px";

            box_one.childNodes[3].style.paddingRight = "0px";


            box_one.childNodes[3].innerHTML = `Materials <span class="first-span">Expertise</span>`;

            

            
            
        }

        if( i == 2) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "none"; 

            box_one.style.backgroundColor = "rgb(242,183,96)"; 

            box_one.childNodes[1].style.opacity = "1"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            box_one.childNodes[3].style.paddingLeft = "20px";

            box_one.childNodes[3].style.paddingRight = "0px";

            box_one.childNodes[3].innerHTML = `Complex <span class="first-span">Componenets</span>`;

            

            
            
        }

        if( i == 3) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "none"; 

            box_one.style.backgroundColor = "rgb(37,37,37)"; 

            box_one.childNodes[1].style.opacity = "1"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            box_one.childNodes[3].style.paddingLeft = "20px";

            box_one.childNodes[3].style.paddingRight = "0px";

            box_one.childNodes[3].innerHTML = `Manufacturing<span class="first-span"> & Assembly</span>`;

            

            
            
        }

        if( i == 4) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.style.backgroundImage = "none"; 

            box_one.style.backgroundColor = "rgb(242,183,96)"; 

            box_one.childNodes[1].style.opacity = "1"; 

            box_one.childNodes[1].style.transition = "opacity 0s";

            box_one.style.transition = "background-color 0.5s, background-image 0.5s";

            box_one.childNodes[3].style.paddingLeft = "20px";

            box_one.childNodes[3].style.paddingRight = "0px";

            box_one.childNodes[3].innerHTML = `Finished Device <span class="first-span">Services</span>`;

            

            
            
        }


    })




}



const modalBg = document.getElementsByTagName("div")[0];
const modalBox = document.getElementsByTagName("div")[1];
let box_btn = document.querySelectorAll('.container-one div');
// loop through all the boxes and select the learn more button for modal
for(let i = 0; i < box.length; i++) {
    
    document.querySelectorAll('.container-one div')[i].addEventListener('mouseenter', () => {

        if( i == 0 || i == 1 || i == 2 || i == 3 || i == 4 ) {

            let box_one = document.querySelectorAll('.container-one div')[i];

            box_one.childNodes[3].childNodes[5].addEventListener('click', function(event) {

                event.preventDefault()
                modalBg.classList.add("active")
                modalBox.classList.add("active")
            
                box_one.childNodes[3].childNodes[5].style.display = "none";
            
            })
            
        }


    })

}

const closeBtns = document.querySelectorAll(".js-close");
// close the modal
closeBtns.forEach(node => {
    node.addEventListener('click', function(e) {
        e.preventDefault()
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")
    })
})


