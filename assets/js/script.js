//SmoothScroll
$(document).ready(function () {


    $("a").click(function () {
        var gato = this.hash
        
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top 
            },
            4000
        )

    })
 
})

//botón Enviar
$ ("#enviar").click(function() {
    alert("Se ha recibido su mensaje, nos contactaremos a la brevedad")
  })
  

