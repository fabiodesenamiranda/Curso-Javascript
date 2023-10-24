const calcRevealPattern = (function(){
    
    let n = 0

    function somar(_n){
        n += _n

        console.log(this)
    }
    function subtrair(_n){
        n -= _n
    }

    function log(){
        console.log(n)
    }
        return {

            somar, subtrair, log

        }
    })()

    calcRevealPattern.somar(5)
    calcRevealPattern.log()