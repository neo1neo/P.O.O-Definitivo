function traerTablas(){
    let num = parseInt(document.getElementById("inputText").value);
    let result =`la tabla de ${num} es: <br>`;
    for (let i = 1 ; i <= 10 ; i++){
        result += `${i} X ${num} = ${i*num}<br>`
    }
    document.getElementById("lista").innerHTML = result;
}