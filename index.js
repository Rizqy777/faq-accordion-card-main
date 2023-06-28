const boton = document.querySelectorAll(".li");
console.log(boton);

boton.forEach(function (button){
    button.addEventListener("click", function() {
        this.classList.toggle("active");

        if (button.classList.contains("active")){
            boton.forEach(function(button){
                button.classList.remove("active");
            })
            button.classList.toggle("active");
        }
    })
})