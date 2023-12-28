let answers = document.querySelectorAll(".Info");
let plusOrminus = document.querySelectorAll(".PlusMinus");

let cambiador = 0;

plusOrminus.forEach(function(mostrarInfo, index){
    mostrarInfo.addEventListener("click",function(){
        if(cambiador == 0){
            answers[index].style.display = "block";
            mostrarInfo.src = "/images/icon-minus.svg"
            cambiador = 1;
        } else if (cambiador == 1 ){
            answers[index].style.display = "none";
            mostrarInfo.src = "/images/icon-plus.svg"
            cambiador = 0;
        }

    });
});
