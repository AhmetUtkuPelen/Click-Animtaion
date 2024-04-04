// ! choose body to add eventListener ! \\
let body = document.querySelector('body')

// ! define the function to make aniamtion happen ! \\

body.addEventListener('click',function(e){

    let spark = document.createElement('div')

    spark.classList.add('spark')

    body.appendChild(spark)

    spark.style.top = (e.clientY - body.offsetTop ) + 'px'

    spark.style.left = (e.clientX - body.offsetLeft ) + 'px'

    spark.style.filter = 'hue-rotate('+ Math.random()* 360+'deg)'


    // ! 8 * 45 = 360 => circle shape ! \\ 

    for(let i = 0 ; i < 8 ; i++){

        let span = document.createElement('span')

        span.style.transform = 'rotate('+ (i * 45)+'deg)'

        spark.appendChild(span)

    }

    // ! to determine when it is gonna be removed ! \\

    setTimeout(function(){

        spark.remove()

    },1000)

})