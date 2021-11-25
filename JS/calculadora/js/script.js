


//comandos para selecionar um elemento na tela


// function zera(){

//     let cp = document.querySelectorAll("input[type=number]")

//     //console.log(cp, cp.item(0))

//     cp.item(0).value = "100"
//     cp.item(1).value = "100"

// }

// const zera1 = function(){

//     let cp = document.querySelectorAll("input[type=number]")

//     cp.item(0).value = "150"
//     cp.item(1).value = "150"

// }

// //Arrow Function


// let botoes = document.querySelectorAll(".botao")


// let btnZerar = document.querySelectorAll(".botao[name=btn1]")

// btnZerar.item(0).addEventListener("click",zera)
// botoes.item(1).addEventListener("click",zera1)
// botoes.item(2).addEventListener("click",() => {
//     let cp = document.querySelectorAll("input[type=number]")

//     cp.forEach( (impt) =>{
//         impt.value = 200
//     } )

    
// })


let botoes = document.querySelectorAll(".botao")

botoes.forEach(btn =>{

    btn.addEventListener("click", (e) =>{
        console.log(e.target.name, e.target.dataset.op,
            btn.dataset.op)
        
        let indvResultado = document.getElementsByClassName("resultado")

        if (btn.dataset.op === "0"){           
            let inp = document.getElementsByClassName("visor")
            inp[0].value = "0"
            inp[1].value = "0"
        }else if (btn.dataset.op === "+"){
            let inp = document.querySelectorAll(".visor")
            console.log(inp)
            let res =  parseFloat(inp.item(0).value) + 
            parseFloat(inp.item(1).value)

            indvResultado[0].innerHTML = "resultado: "+res

            inp.item(0).value = res
            inp.item(1).value = ""
            inp.item(1).focus()
        }
    } )

})


