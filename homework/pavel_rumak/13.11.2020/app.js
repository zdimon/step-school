



//window.onload = function () {
//    const loginSubmit = document.getElementById('login-submit')  
//    loginSubmit.addEventListener('click', function(e){
//       e.preventDefault()
//       console.log(document.forms[0].elements[0].value)
//    })
//}

const first = document.getElementById('1')
const second = document.getElementById('2')

window.onload = function()
{
    first.addEventListener('click', function(e) {
        const element_1 = document.getElementById('first')
        element_1.style.display = "block"
        
    })

    second.addEventListener('click', function(e) {
        const element_2 = document.getElementById('second')
        element_2.style.display = "block"

    })
}