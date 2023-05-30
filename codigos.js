
function media(){
    let nome = (document.getElementById("nome").value)

    let n1 = Number(document.getElementById("nota1").value)
    console.log(n1)
    let n2 = Number(document.getElementById("nota2").value)
    let n3 = Number(document.getElementById("nota3").value)

    suaMedia = (n1+n2+n3)/3


    if(suaMedia >= 6)
    if(suaMedia==10 )
        alert("Você foi aprovado")
    else 
        document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ suaMedia}, parabéns você foi aprovado!!!`
    else
        document.getElementById('valor').innerHTML = `${nome}, sua média foi ${+ suaMedia}, que pena você foi reprovado :( `
}