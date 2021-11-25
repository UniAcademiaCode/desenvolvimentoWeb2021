

let dados = []


let btn = document.querySelector("#btnExibir")
let btnSalvar = document.querySelector("#btnSalvar")
let btnListar = document.querySelector("#btnListar")


let form = document.querySelector("#dvForm")

btn.addEventListener("click",()=>{
    //form.className="linha"
    form.style.display="block"
    //btn.style.display="none"
})

btnSalvar.addEventListener("click",()=>{

    let campos = document.querySelectorAll("#dvForm input")

    // console.log(campos.item(0).value)

    //registros????? classe????
    let pessoa = {
        nome: campos.item(0).value,
        filhos: campos.item(1).value,
        salario: campos.item(2).value
    }

    dados.push( pessoa )

    console.log(dados)

    // campos.item(0).value=""
    // campos.item(1).value=""
    // campos.item(2).value=""
    campos.forEach( (cp)=>{
        cp.value=""
    } )

    form.style.display="none"


})

btnListar.addEventListener("click",()=>{


    let total = 0
    dados.forEach( (pes)=>{
        console.log(pes.nome)
        total += parseFloat( pes.salario )  
    } )

    console.log("Total de Salario :: "+total)

    let dvResultado = document.createElement("div")
    dvResultado.className="resultado"
    dvResultado.innerHTML="Total de Salario :: "+total

    let dv = document.getElementsByClassName("resultado")



    dv[0].parentNode.append(dvResultado)
})



