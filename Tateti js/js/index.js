import ColoresAleatorios from "./coloresAleatorioHover.js";

const button = document.querySelectorAll("button");
const color = new ColoresAleatorios();

let PlayerOneWins = false;
let PlayerTwoWins = false;

// BOTONES
const button1 = document.getElementById("c1");
const button2 = document.getElementById("c2");
const button3 = document.getElementById("c3");
const button4 = document.getElementById("c4");
const button5 = document.getElementById("c5");
const button6 = document.getElementById("c6");
const button7 = document.getElementById("c7");
const button8 = document.getElementById("c8");
const button9 = document.getElementById("c9");

const imgVictory = document.querySelector(".victory-img");
const imgDefeat = document.querySelector(".defeat-img");
let contador = 0;
setInterval(Win, 1000);


// HOVER
button.forEach(value => {
    value.addEventListener("mouseover", () => {
        color.SeleccionDeColor(value);

        value.addEventListener("mouseout", () => {
            color.Sacarcolor(value);
        });
    })
});



// POSITION
button.forEach(value => {

    value.onclick = () => {
        if (contador % 2 === 0) {
            if (value.classList.contains("PlayerTwo") || value.classList.contains("PlayerOne")) {

            } else {
                value.classList.add("PlayerOne");
                value.classList.remove("empty");
                console.log("Turno del 1");
                contador = contador + 1;
                return;

            }

        }

        if (contador = !0) {

            if (value.classList.contains("PlayerOne") || value.classList.contains("PlayerTwo")) {

            } else {
                value.classList.remove("empty");
                value.classList.add("PlayerTwo");
                console.log("Turno del 2");
                contador = contador + 1;
                return;
            }
        }

    }
});




// GANADOR
function Win() {

    console.log("queso");


    //Filas
    if (c1.classList.contains("PlayerOne") && c2.classList.contains("PlayerOne") && c3.classList.contains("PlayerOne")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerOneWins = true;

    } else if (c4.classList.contains("PlayerOne") && c5.classList.contains("PlayerOne") && c6.classList.contains("PlayerOne")) {

        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerOneWins = true;
    } else if (c7.classList.contains("PlayerOne") && c8.classList.contains("PlayerOne") && c9.classList.contains("PlayerOne")) {
    
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)
        PlayerOneWins = true;

        //Columnas
    } else if (c1.classList.contains("PlayerOne") && c4.classList.contains("PlayerOne") && c7.classList.contains("PlayerOne")) {
    
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerOneWins = true;
    } else if (c2.classList.contains("PlayerOne") && c5.classList.contains("PlayerOne") && c8.classList.contains("PlayerOne")) {
    
        button.forEach(value =>{
            value.setAttribute("disabled", " ");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)
        
        PlayerOneWins = true;
    } else if (c3.classList.contains("PlayerOne") && c6.classList.contains("PlayerOne") && c9.classList.contains("PlayerOne")) {
        button.forEach(value =>{
            value.setAttribute("disabled", " ");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerOneWins = true;
    }

    //Diagonales
    else if (c1.classList.contains("PlayerOne") && c5.classList.contains("PlayerOne") && c9.classList.contains("PlayerOne")) {
        button.forEach(value =>{
            value.setAttribute("disabled", " ");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerOneWins = true;
    } else if (c7.classList.contains("PlayerOne") && c5.classList.contains("PlayerOne") && c3.classList.contains("PlayerOne")) {
        button.forEach(value =>{
            value.setAttribute("disabled", " ");
        });

        imgVictory.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgVictory.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerOneWins = true;
    } else if (!c1.classList.contains("empty") && !c2.classList.contains("empty") && !c3.classList.contains("empty") && !c4.classList.contains("empty") && !c5.classList.contains("empty") && !c6.classList.contains("empty") && !c7.classList.contains("empty") && !c8.classList.contains("empty") && !c9.classList.contains("empty")) {
        console.log("EMPATE");
    }








    //Filas
    if (c1.classList.contains("PlayerTwo") && c2.classList.contains("PlayerTwo") && c3.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;
    } else if (c4.classList.contains("PlayerTwo") && c5.classList.contains("PlayerTwo") && c6.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;

    } else if (c7.classList.contains("PlayerTwo") && c8.classList.contains("PlayerTwo") && c9.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;

        //Columnas
    } else if (c1.classList.contains("PlayerTwo") && c4.classList.contains("PlayerTwo") && c7.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;
    } else if (c2.classList.contains("PlayerTwo") && c5.classList.contains("PlayerTwo") && c8.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;
    } else if (c3.classList.contains("PlayerTwo") && c6.classList.contains("PlayerTwo") && c9.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;
    }

    //Diagonales
    else if (c1.classList.contains("PlayerTwo") && c5.classList.contains("PlayerTwo") && c9.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;
    } else if (c7.classList.contains("PlayerTwo") && c5.classList.contains("PlayerTwo") && c3.classList.contains("PlayerTwo")) {
        button.forEach(value =>{
            value.setAttribute("disabled", "");
        });

        imgDefeat.removeAttribute("hidden", "");


        setTimeout(()=>{
            imgDefeat.setAttribute("hidden", "");
            button.forEach(element =>{
                if(element.classList.contains("PlayerOne")){
                    element.classList.remove("PlayerOne");
                }else if(element.classList.contains("PlayerTwo")){
                    element.classList.remove("PlayerTwo")
                }
                element.removeAttribute("disabled", "")
            });

            
        },2000)

        PlayerTwoWins = true;
    } else if (!c1.classList.contains("empty") && !c2.classList.contains("empty") && !c3.classList.contains("empty") && !c4.classList.contains("empty") && !c5.classList.contains("empty") && !c6.classList.contains("empty") && !c7.classList.contains("empty") && !c8.classList.contains("empty") && !c9.classList.contains("empty")) {
        console.log("EMPATE");
    }

};