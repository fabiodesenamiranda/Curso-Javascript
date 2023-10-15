function teste(cb) {
    console.log("funcao teste")

    cb()
}

teste(function(){
    console.log("funcao anonima de callback")
})