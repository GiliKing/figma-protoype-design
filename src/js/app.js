

let screen_only = screen.width;

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

function box_in_one_col1() {

    

    document.querySelector('.col1-1').style.backgroundColor = "transparent";

    document.querySelector('.col1-1').style.transition = "background-color 3s";

    setTimeout(show_image_text, 30);

    function show_image_text() {
        
            document.querySelector('.col1-learn-one').style.opacity = "1";

            document.querySelector('.col1-learn-one').style.display = "block";

            document.querySelector('.col1-learn-one').style.borderBottomLeftRadius  = "20px";

            document.querySelector('.col1-text').style.borderBottomLeftRadius = "0px";

            document.querySelector('.col1-text-show').style.borderBottomLeftRadius = "0px";
                
            document.querySelector('.col1-1').style.backgroundImage = "url('assets/Union.png')";

            document.querySelector('.col1-1').style.transition = "background-image 0.5s ease";


            document.querySelector('.col1-1').style.backgroundPosition = "center";

            document.querySelector('.col1-1').style.backgroundRepeat = "no-repeat";
        
            document.querySelector('.col1-1').style.backgroundSize = "cover";
        
            document.querySelector('.col1-image').style.display = "none";
            
            document.querySelector('.col1-image').style.pointerEvents = "none";

            document.getElementsByClassName('col1-text')[0].style.pointerEvents = "none";

            document.getElementsByClassName('col1-text-show')[0].style.color = "transparent";

        
        
            // text that wil be replaced
            replace_text = document.createElement("p");
        
            first_text = document.createElement("span");

            second_text = document.createElement("span");
        
            btn_text = document.createElement("span");

            replace_text.setAttribute("class", "replace_text")


            replace_text.style.borderBottomLeftRadius = "20px";
            replace_text.style.paddingBottom = "12px";
            replace_text.style.marginBottom = "0px";
            replace_text.style.paddingTop = "12px";
            replace_text.style.paddingLeft = "30px";
            replace_text.style.paddingRight = "30px";
            replace_text.style.backgroundColor = "#FFFFFF";
            replace_text.style.fontWeight = "600";
            replace_text.style.fontSize = "15px";
            replace_text.style.lineHeight = "24px";
            replace_text.style.color = "#191A1B";
            replace_text.style.position = "absolute";
            replace_text.style.bottom = "0";
            replace_text.style.right = "0";
            replace_text.style.left = "0";

            if(Number(screen_only) < 980 ) {

                document.querySelector('.col1-1').style.borderBottomLeftRadius = "0px";
        
                replace_text.style.borderBottomLeftRadius = "0px";
        
            }  else {
        
                // do nothing
                
            }



            

            replace_text.style.pointerEvents = "none";
        
            first_text.innerHTML = "Design &amp; Developement";
            first_text.style.color = "#191A1B";
            first_text.style.fontWeight = "600";
            first_text.fontFamily = "Klavika Basic";
            first_text.style.fontSize = "15px";
            first_text.style.marginBottom = "4px";
            first_text.style.display = "block";

            first_text.style.pointerEvents = "none";

        
            second_text.innerHTML = "Solve complex problems and accelerate the speed of developemt";
            second_text.style.color = "#191A1B";
            second_text.style.fontWeight = "400";
            second_text.fontFamily = "Nunito";
            second_text.style.fontSize = "15px";
            second_text.style.marginBottom = "10px";
            second_text.style.display = "block";

            second_text.style.pointerEvents = "none";

        
            replace_text.appendChild(first_text);
        
            replace_text.appendChild(second_text);
        
            replace_text.appendChild(btn_text);

            document.querySelector('.col1-1').appendChild(replace_text);


    } 

    document.querySelector('.col1-1').setAttribute("onmouseout", "box_out_one_col1()");

    document.querySelector('.col1-1').removeAttribute("onmouseenter", "box_in_one_col1()");

}


function box_out_one_col1() {


    

    document.querySelector('.col1-1').style.backgroundColor = "#F2B760";

    document.querySelector('.col1-1').style.transition = "background-color 3s ease";

    setTimeout(show_image_text, 30);

    function show_image_text() { 

        document.querySelector('.col1-learn-one').style.opacity = "0";

        document.querySelector('.col1-learn-one').style.borderBottomLeftRadius  = "0px";

        document.querySelector('.col1-learn-one').style.transition = "all 1s";

        document.querySelector('.col1-text').style.borderBottomLeftRadius = "20px";

        document.querySelector('.col1-text').style.transition = "border-bottom-left-radius 6s";

        document.querySelector('.col1-text-show').style.borderBottomLeftRadius = "20px"; 

        document.querySelector('.col1-text-show').style.transition = "border-bottom-left-radius 6s"; 

        document.querySelector('.col1-1').style.backgroundImage = "none";

        document.querySelector('.col1-1').style.transition = "background-image 1s ease";

        document.querySelector('.replace_text').remove();
    
        document.querySelector('.col1-image').style.display = "block";

        document.querySelector('.col1-image').style.pointerEvents = "none";

        document.querySelector('.col1-image').style.transition = "display 0.5s ease";

        document.getElementsByClassName('col1-text')[0].style.pointerEvents = "none";
    
        document.getElementsByClassName('col1-text')[0].style.display = "block";

        document.getElementsByClassName('col1-text')[0].style.transition = "display 3s ease";    

        document.getElementsByClassName('col1-text')[0].style.paddingLeft = "5px";

        document.getElementsByClassName('col1-text')[0].style.paddingRight = "0px";

        document.getElementsByClassName('col1-text')[0].style.paddingTop = "16px";

        document.getElementsByClassName('col1-text')[0].style.paddingBottom = "16px";

        if(Number(screen_only) < 950 ) {

            document.querySelector('.col1-1').style.borderBottomLeftRadius = "20px";
    
            document.querySelector('replace_text').style.borderBottomLeftRadius = "20px";
    
        }  else {
    
            // do nothing
            
        }
    

    } 

    document.querySelector('.col1-1').setAttribute("onmouseenter", "box_in_one_col1()");

    document.querySelector('.col1-1').removeAttribute("onmouseout", "box_out_one_col1()");


}


function box_in_one_col2() {

    

    document.querySelector('.col2-2').style.backgroundColor = "transparent";

    document.querySelector('.col2-2').style.transition = "background-color 3s";

    document.querySelector('.col1').style.backgroundColor = "transparent";

    document.querySelector('.col1').style.transition = "background-color 0.05s";

    document.querySelector('.col1-text-show').style.backgroundColor = "transparent";

    document.querySelector('.col1-text-show').style.transition = "background-color 0.05s";

    setTimeout(show_image_text, 30);

    function show_image_text() {

            document.querySelector('.col2-learn-two').style.opacity = "1";

            document.querySelector('.col2-learn-two').style.display = "block";
                
            document.querySelector('.col2-2').style.backgroundImage = "url('assets/Union1.png')";

            document.querySelector('.col2-2').style.transition = "background-image 0.5s ease";


            document.querySelector('.col2-2').style.backgroundPosition = "center";

            document.querySelector('.col2-2').style.backgroundRepeat = "no-repeat";
        
            document.querySelector('.col2-2').style.backgroundSize = "cover";
        
            document.querySelector('.col2-image').style.display = "none";
            
            document.querySelector('.col2-image').style.pointerEvents = "none";

            document.getElementsByClassName('col2-text')[0].style.pointerEvents = "none";
        
            document.getElementsByClassName('col2-text')[0].style.display = "none";  
            
            document.getElementsByClassName('col2-text-show')[0].style.color = "transparent";
        
        
            // text that wil be replaced
            replace_text = document.createElement("p");
        
            first_text = document.createElement("span");

            second_text = document.createElement("span");
        
            btn_text = document.createElement("span");

            replace_text.setAttribute("class", "replace_text")


            // replace_text.style.borderBottomLeftRadius = "20px";
            replace_text.style.paddingBottom = "12px";
            replace_text.style.marginBottom = "0px";
            replace_text.style.paddingTop = "12px";
            replace_text.style.paddingLeft = "30px";
            replace_text.style.paddingRight = "30px";
            replace_text.style.backgroundColor = "#FFFFFF";
            replace_text.style.fontWeight = "600";
            replace_text.style.fontSize = "15px";
            replace_text.style.lineHeight = "24px";
            replace_text.style.color = "#191A1B";
            replace_text.style.position = "absolute";
            replace_text.style.bottom = "0";
            replace_text.style.right = "0";
            replace_text.style.left = "0";

            replace_text.style.pointerEvents = "none";
        
            first_text.innerHTML = "Materials Expertise";
            first_text.style.color = "#191A1B";
            first_text.style.fontWeight = "600";
            first_text.fontFamily = "Klavika Basic";
            first_text.style.fontSize = "15px";
            first_text.style.marginBottom = "4px";
            first_text.style.display = "block";

            first_text.style.pointerEvents = "none";

        
            second_text.innerHTML = "Navigate material compatibilities and performance";
            second_text.style.color = "#191A1B";
            second_text.style.fontWeight = "400";
            second_text.fontFamily = "Nunito";
            second_text.style.fontSize = "15px";
            second_text.style.marginBottom = "10px";
            second_text.style.display = "block";

            second_text.style.pointerEvents = "none";

        
            replace_text.appendChild(first_text);
        
            replace_text.appendChild(second_text);
        
            replace_text.appendChild(btn_text);

            document.querySelector('.col2-2').appendChild(replace_text);


    } 

    document.querySelector('.col2-2').setAttribute("onmouseout", "box_out_one_col2()");

    document.querySelector('.col2-2').removeAttribute("onmouseenter", "box_in_one_col2()");

}


function box_out_one_col2() {


    

    document.querySelector('.col2-2').style.backgroundColor = "#252525";

    document.querySelector('.col2-2').style.transition = "background-color 3s ease";

    document.querySelector('.col1').style.backgroundColor = "#252525";

    document.querySelector('.col1').style.transition = "background-color 0.05s";

    document.querySelector('.col1-text-show').style.backgroundColor = "#ffffff";

    document.querySelector('.col1-text-show').style.transition = "background-color 0.05s";

    if(Number(screen_only) < 1000) {

        document.querySelector('.col1').style.background = "transparent";

        document.querySelector('.col1').style.transition = "background 0.01s";

        document.querySelector('.col1-text-show').style.display = "none";

        // document.querySelector('.col1-text-show').style.transition = "opacity 0.01s";
    }

    
    setTimeout(show_image_text, 30);

    function show_image_text() { 

        document.querySelector('.col2-learn-two').style.opacity = "0";

        document.querySelector('.col2-learn-two').style.transition = "all 1s";

        document.querySelector('.col2-2').style.backgroundImage = "none";

        document.querySelector('.col2-2').style.transition = "background-image 1s ease";

        document.querySelector('.replace_text').remove();
    
        document.querySelector('.col2-image').style.display = "block";

        document.querySelector('.col2-image').style.pointerEvents = "none";

        document.querySelector('.col2-image').style.transition = "display 0.5s ease";

        document.getElementsByClassName('col2-text')[0].style.pointerEvents = "none";
    
        document.getElementsByClassName('col2-text')[0].style.display = "block";

        document.getElementsByClassName('col2-text')[0].style.transition = "display 3s ease";    

        document.getElementsByClassName('col2-text')[0].style.paddingLeft = "5px";

        document.getElementsByClassName('col2-text')[0].style.paddingRight = "0px";

        document.getElementsByClassName('col2-text')[0].style.paddingTop = "16px";

        document.getElementsByClassName('col2-text')[0].style.paddingBottom = "16px";
    

    } 

    document.querySelector('.col2-2').setAttribute("onmouseenter", "box_in_one_col2()");

    document.querySelector('.col2-2').removeAttribute("onmouseout", "box_out_one_col2()");


}


function box_in_one_col3() {

    

    document.querySelector('.col3-3').style.backgroundColor = "transparent";

    document.querySelector('.col3-3').style.transition = "background-color 3s";

    document.querySelector('.col2').style.background = "transparent";

    document.querySelector('.col2').style.transition = "background 0.05s";

    document.querySelector('.col2-text-show').style.backgroundColor = "transparent";

    document.querySelector('.col2-text-show').style.transition = "background-color 0.05s";


    setTimeout(show_image_text, 30);

    function show_image_text() {

            document.querySelector('.col3-learn-three').style.opacity = "1";

            document.querySelector('.col3-learn-three').style.display = "block";
                
            document.querySelector('.col3-3').style.backgroundImage = "url('assets/Union2.png')";

            document.querySelector('.col3-3').style.transition = "background-image 0.5s ease";


            document.querySelector('.col3-3').style.backgroundPosition = "center";

            document.querySelector('.col3-3').style.backgroundRepeat = "no-repeat";
        
            document.querySelector('.col3-3').style.backgroundSize = "cover";
        
            document.querySelector('.col3-image').style.display = "none";
            
            document.querySelector('.col3-image').style.pointerEvents = "none";

            document.getElementsByClassName('col3-text')[0].style.pointerEvents = "none";
        
            document.getElementsByClassName('col3-text')[0].style.display = "none";

            document.getElementsByClassName('col3-text-show')[0].style.color = "transparent";
        
        
            // text that wil be replaced
            replace_text = document.createElement("p");
        
            first_text = document.createElement("span");

            second_text = document.createElement("span");
        
            btn_text = document.createElement("span");

            replace_text.setAttribute("class", "replace_text")


            // replace_text.style.borderBottomLeftRadius = "20px";
            replace_text.style.paddingBottom = "12px";
            replace_text.style.marginBottom = "0px";
            replace_text.style.paddingTop = "12px";
            replace_text.style.paddingLeft = "30px";
            replace_text.style.paddingRight = "30px";
            replace_text.style.backgroundColor = "#FFFFFF";
            replace_text.style.fontWeight = "600";
            replace_text.style.fontSize = "15px";
            replace_text.style.lineHeight = "24px";
            replace_text.style.color = "#191A1B";
            replace_text.style.position = "absolute";
            replace_text.style.bottom = "0";
            replace_text.style.right = "0";
            replace_text.style.left = "0";

            replace_text.style.pointerEvents = "none";
        
            first_text.innerHTML = "Complex Components";
            first_text.style.color = "#191A1B";
            first_text.style.fontWeight = "600";
            first_text.fontFamily = "Klavika Basic";
            first_text.style.fontSize = "15px";
            first_text.style.marginBottom = "4px";
            first_text.style.display = "block";

            first_text.style.pointerEvents = "none";

        
            second_text.innerHTML = "An industry laeder in manufacture of complex components and assemblies";
            second_text.style.color = "#191A1B";
            second_text.style.fontWeight = "400";
            second_text.fontFamily = "Nunito";
            second_text.style.fontSize = "15px";
            second_text.style.marginBottom = "10px";
            second_text.style.display = "block";

            second_text.style.pointerEvents = "none";

        
            replace_text.appendChild(first_text);
        
            replace_text.appendChild(second_text);
        
            replace_text.appendChild(btn_text);

            document.querySelector('.col3-3').appendChild(replace_text);


    } 

    document.querySelector('.col3-3').setAttribute("onmouseout", "box_out_one_col3()");

    document.querySelector('.col3-3').removeAttribute("onmouseenter", "box_in_one_col3()");

}


function box_out_one_col3() {


    

    document.querySelector('.col3-3').style.background= "#F2B760";

    document.querySelector('.col3-3').style.transition = "background 3s ease";

    document.querySelector('.col2').style.background = "#F2B760";

    document.querySelector('.col2').style.transition = "background 0.05s";

    document.querySelector('.col2-text-show').style.backgroundColor = "#ffffff";

    document.querySelector('.col2-text-show').style.transition = "background-color 0.05s";

        if(Number(screen_only) < 1000) {

        document.querySelector('.col2').style.background = "transparent";

        document.querySelector('.col2').style.transition = "background 0.01s";

        document.querySelector('.col2-text-show').style.display = "none";

        // document.querySelector('.col2-text-show').style.transition = "opacity 0.01s";
    }

    setTimeout(show_image_text, 30);

    function show_image_text() { 

        document.querySelector('.col3-learn-three').style.opacity = "0";

        document.querySelector('.col3-learn-three').style.transition = "all 1s";

        document.querySelector('.col3-3').style.backgroundImage = "none";

        document.querySelector('.col3-3').style.transition = "background-image 1s ease";

        document.querySelector('.replace_text').remove();
    
        document.querySelector('.col3-image').style.display = "block";

        document.querySelector('.col3-image').style.pointerEvents = "none";

        document.querySelector('.col3-image').style.transition = "display 0.5s ease";

        document.getElementsByClassName('col3-text')[0].style.pointerEvents = "none";
    
        document.getElementsByClassName('col3-text')[0].style.display = "block";

        document.getElementsByClassName('col3-text')[0].style.transition = "display 3s ease";    

        document.getElementsByClassName('col3-text')[0].style.paddingLeft = "5px";

        document.getElementsByClassName('col3-text')[0].style.paddingRight = "0px";

        document.getElementsByClassName('col3-text')[0].style.paddingTop = "16px";

        document.getElementsByClassName('col3-text')[0].style.paddingBottom = "16px";
    

    } 

    document.querySelector('.col3-3').setAttribute("onmouseenter", "box_in_one_col3()");

    document.querySelector('.col3-3').removeAttribute("onmouseout", "box_out_one_col3()");


}


function box_in_one_col4() {

    

    document.querySelector('.col4-4').style.backgroundColor = "transparent";

    document.querySelector('.col4-4').style.transition = "background-color 3s";

    document.querySelector('.col3').style.background = "transparent";

    document.querySelector('.col3').style.transition = "background 0.05s";

    document.querySelector('.col3-text-show').style.backgroundColor = "transparent";

    document.querySelector('.col3-text-show').style.transition = "background-color 0.05s";


    setTimeout(show_image_text, 30);

    function show_image_text() {

            document.querySelector('.col4-learn-four').style.opacity = "1";

            document.querySelector('.col4-learn-four').style.display = "block";
                
            document.querySelector('.col4-4').style.backgroundImage = "url('assets/Union3.png')";

            document.querySelector('.col4-4').style.transition = "background-image 0.5s ease";


            document.querySelector('.col4-4').style.backgroundPosition = "center";

            document.querySelector('.col4-4').style.backgroundRepeat = "no-repeat";
        
            document.querySelector('.col4-4').style.backgroundSize = "cover";
        
            document.querySelector('.col4-image').style.display = "none";
            
            document.querySelector('.col4-image').style.pointerEvents = "none";

            document.getElementsByClassName('col4-text')[0].style.pointerEvents = "none";
        
            document.getElementsByClassName('col4-text')[0].style.display = "none";   
            
            document.getElementsByClassName('col4-text-show')[0].style.color = "transparent";
        
        
            // text that wil be replaced
            replace_text = document.createElement("p");
        
            first_text = document.createElement("span");

            second_text = document.createElement("span");
        
            btn_text = document.createElement("span");

            replace_text.setAttribute("class", "replace_text")


            // replace_text.style.borderBottomLeftRadius = "20px";
            replace_text.style.paddingBottom = "12px";
            replace_text.style.marginBottom = "0px";
            replace_text.style.paddingTop = "12px";
            replace_text.style.paddingLeft = "30px";
            replace_text.style.paddingRight = "30px";
            replace_text.style.backgroundColor = "#FFFFFF";
            replace_text.style.fontWeight = "600";
            replace_text.style.fontSize = "15px";
            replace_text.style.lineHeight = "24px";
            replace_text.style.color = "#191A1B";
            replace_text.style.position = "absolute";
            replace_text.style.bottom = "0";
            replace_text.style.right = "0";
            replace_text.style.left = "0";

            replace_text.style.pointerEvents = "none";
        
            first_text.innerHTML = "Manufacturing &amp; Assemby";
            first_text.style.color = "#191A1B";
            first_text.style.fontWeight = "600";
            first_text.fontFamily = "Klavika Basic";
            first_text.style.fontSize = "15px";
            first_text.style.marginBottom = "4px";
            first_text.style.display = "block";

            first_text.style.pointerEvents = "none";

        
            second_text.innerHTML = "From initial commercial production to high-volume production, we’ve got you covered";
            second_text.style.color = "#191A1B";
            second_text.style.fontWeight = "400";
            second_text.fontFamily = "Nunito";
            second_text.style.fontSize = "15px";
            second_text.style.marginBottom = "10px";
            second_text.style.display = "block";

            second_text.style.pointerEvents = "none";

        
            replace_text.appendChild(first_text);
        
            replace_text.appendChild(second_text);
        
            replace_text.appendChild(btn_text);

            document.querySelector('.col4-4').appendChild(replace_text);


    } 

    document.querySelector('.col4-4').setAttribute("onmouseout", "box_out_one_col4()");

    document.querySelector('.col4-4').removeAttribute("onmouseenter", "box_in_one_col4()");

}


function box_out_one_col4() {

    

    document.querySelector('.col4-4').style.background= "#252525";

    document.querySelector('.col4-4').style.transition = "background 3s ease";

    document.querySelector('.col3').style.background = "#252525";

    document.querySelector('.col3').style.transition = "background 0.05s";

    document.querySelector('.col3-text-show').style.backgroundColor = "#ffffff";

    document.querySelector('.col3-text-show').style.transition = "background-color 0.05s";

    if(Number(screen_only) < 1000) {

        document.querySelector('.col3').style.background = "transparent";

        document.querySelector('.col3').style.transition = "background 0.01s";

        document.querySelector('.col3-text-show').style.display = "none";

        // document.querySelector('.col3-text-show').style.transition = "opacity 0.01s";
    }

    setTimeout(show_image_text, 30);

    function show_image_text() { 

        document.querySelector('.col4-learn-four').style.opacity = "0";

        document.querySelector('.col4-learn-four').style.transition = "all 1s";

        document.querySelector('.col4-4').style.backgroundImage = "none";

        document.querySelector('.col4-4').style.transition = "background-image 1s ease";

        document.querySelector('.replace_text').remove();
    
        document.querySelector('.col4-image').style.display = "block";

        document.querySelector('.col4-image').style.pointerEvents = "none";

        document.querySelector('.col4-image').style.transition = "display 0.5s ease";

        document.getElementsByClassName('col4-text')[0].style.pointerEvents = "none";
    
        document.getElementsByClassName('col4-text')[0].style.display = "block";

        document.getElementsByClassName('col4-text')[0].style.transition = "display 3s ease";    

        document.getElementsByClassName('col4-text')[0].style.paddingLeft = "5px";

        document.getElementsByClassName('col4-text')[0].style.paddingRight = "0px";

        document.getElementsByClassName('col4-text')[0].style.paddingTop = "16px";

        document.getElementsByClassName('col4-text')[0].style.paddingBottom = "16px";
    

    } 

    document.querySelector('.col4-4').setAttribute("onmouseenter", "box_in_one_col4()");

    document.querySelector('.col4-4').removeAttribute("onmouseout", "box_out_one_col4()");


}


function box_in_one_col5() {

    

    document.querySelector('.col5-5').style.backgroundColor = "transparent";

    document.querySelector('.col5-5').style.transition = "background-color 3s";

    document.querySelector('.col4').style.background = "transparent";

    document.querySelector('.col4').style.transition = "background 0.05s";

    document.querySelector('.col4-text-show').style.backgroundColor = "transparent";

    document.querySelector('.col4-text-show').style.transition = "background-color 0.05s";


    setTimeout(show_image_text, 30);

    function show_image_text() {

            document.querySelector('.col5-learn-five').style.opacity = "1";

            document.querySelector('.col5-learn-five').style.display = "block";
                
            document.querySelector('.col5-5').style.backgroundImage = "url('assets/Union4.png')";

            document.querySelector('.col5-5').style.transition = "background-image 0.5s ease";


            document.querySelector('.col5-5').style.backgroundPosition = "center";

            document.querySelector('.col5-5').style.backgroundRepeat = "no-repeat";
        
            document.querySelector('.col5-5').style.backgroundSize = "cover";
        
            document.querySelector('.col5-image').style.display = "none";
            
            document.querySelector('.col5-image').style.pointerEvents = "none";

            document.getElementsByClassName('col5-text')[0].style.pointerEvents = "none";
        
            document.getElementsByClassName('col5-text')[0].style.display = "none"; 

            // document.getElementsByClassName('col5-text-show')[0].style.color = "transparent";
        
        
            // text that wil be replaced
            replace_text = document.createElement("p");
        
            first_text = document.createElement("span");

            second_text = document.createElement("span");
        
            btn_text = document.createElement("span");

            replace_text.setAttribute("class", "replace_text")


            // replace_text.style.borderBottomLeftRadius = "20px";
            replace_text.style.paddingBottom = "12px";
            replace_text.style.marginBottom = "0px";
            replace_text.style.paddingTop = "12px";
            replace_text.style.paddingLeft = "30px";
            replace_text.style.paddingRight = "30px";
            replace_text.style.backgroundColor = "#FFFFFF";
            replace_text.style.fontWeight = "600";
            replace_text.style.fontSize = "15px";
            replace_text.style.lineHeight = "24px";
            replace_text.style.color = "#191A1B";
            replace_text.style.position = "absolute";
            replace_text.style.bottom = "0";
            replace_text.style.right = "0";
            replace_text.style.left = "0";

            replace_text.style.pointerEvents = "none";
        
            first_text.innerHTML = "Finished Device Services";
            first_text.style.color = "#191A1B";
            first_text.style.fontWeight = "600";
            first_text.fontFamily = "Klavika Basic";
            first_text.style.fontSize = "15px";
            first_text.style.marginBottom = "4px";
            first_text.style.display = "block";

            first_text.style.pointerEvents = "none";

        
            second_text.innerHTML = "Comprehensive packaging and assembly, sterilization and logistics management services.";
            second_text.style.color = "#191A1B";
            second_text.style.fontWeight = "400";
            second_text.fontFamily = "Nunito";
            second_text.style.fontSize = "15px";
            second_text.style.marginBottom = "10px";
            second_text.style.display = "block";

            second_text.style.pointerEvents = "none";

        
            replace_text.appendChild(first_text);
        
            replace_text.appendChild(second_text);
        
            replace_text.appendChild(btn_text);

            document.querySelector('.col5-5').appendChild(replace_text);


    } 

    document.querySelector('.col5-5').setAttribute("onmouseout", "box_out_one_col5()");

    document.querySelector('.col5-5').removeAttribute("onmouseenter", "box_in_one_col5()");

}


function box_out_one_col5() {


    

    document.querySelector('.col5-5').style.background= "#F2B760";

    document.querySelector('.col5-5').style.transition = "background 3s ease";

    document.querySelector('.col4').style.background = "linear-gradient(to left, #F2B760 0%, #F2B760 50%, #252525 50%, #252525 100%)";

    document.querySelector('.col4').style.transition = "background 0.05s";

    document.querySelector('.col4-text-show').style.backgroundColor = "#ffffff";

    document.querySelector('.col4-text-show').style.transition = "background-color 0.05s";

    if(Number(screen_only) < 1000) {

        document.querySelector('.col4').style.background = "transparent";

        document.querySelector('.col4').style.transition = "background 0.01s";

        document.querySelector('.col4-text-show').style.display = "none";

        // document.querySelector('.col4-text-show').style.transition = "opacity 0.01s";
    }

    setTimeout(show_image_text, 30);

    function show_image_text() { 

        document.querySelector('.col5-learn-five').style.opacity = "0";

        document.querySelector('.col5-learn-five').style.transition = "all 1s";

        document.querySelector('.col5-5').style.backgroundImage = "none";

        document.querySelector('.col5-5').style.transition = "background-image 1s ease";

        document.querySelector('.replace_text').remove();
    
        document.querySelector('.col5-image').style.display = "block";

        document.querySelector('.col5-image').style.pointerEvents = "none";

        document.querySelector('.col5-image').style.transition = "display 0.5s ease";

        document.getElementsByClassName('col5-text')[0].style.pointerEvents = "none";
    
        document.getElementsByClassName('col5-text')[0].style.display = "block";

        document.getElementsByClassName('col5-text')[0].style.transition = "display 3s ease";    

        document.getElementsByClassName('col5-text')[0].style.paddingLeft = "5px";

        document.getElementsByClassName('col5-text')[0].style.paddingRight = "0px";

        document.getElementsByClassName('col5-text')[0].style.paddingTop = "16px";

        document.getElementsByClassName('col5-text')[0].style.paddingBottom = "16px";
    

    } 

    document.querySelector('.col5-5').setAttribute("onmouseenter", "box_in_one_col5()");

    document.querySelector('.col5-5').removeAttribute("onmouseout", "box_out_one_col5()");


}




const openBtn = document.querySelectorAll(".js-open");
const modalBg = document.getElementsByTagName("div")[0];
const modalBox = document.getElementsByTagName("div")[1];



for (let i = 0; i < openBtn.length; i++) {

    document.querySelectorAll(".js-open")[i].addEventListener('click', function(event) {

        event.preventDefault()
        modalBg.classList.add("active")
        modalBox.classList.add("active")
    
        document.querySelectorAll(".js-open")[i].style.display = "none";
    
    })
    
}
    

const closeBtns = document.querySelectorAll(".js-close");

closeBtns.forEach(node => {
    node.addEventListener('click', function(e) {
        e.preventDefault()
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")
    })
})