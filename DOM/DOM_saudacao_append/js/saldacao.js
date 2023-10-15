
(function () {
    
    const nomeUsuario = "Fabio"
    
    if(nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p> Ola, <b> ${nomeUsuario} </b> </p>`


        // elementoPai.insertBefore(novoElemento, elementoReferencia)

        const elementoPai = document.querySelector(".hero")
        
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
       
    }

})()