/*window.onload = function()
{
    const loginSubmit = document.getElementById('login-submit')

    loginSubmit.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(document.forms[0].elements[0].value)
    })

    const loginForm = document.getElementById('login-form')

    const select = document.getElementsByTagName('select')

    select[0].addEventListener('change', function(e)
    {
        const value = e.target.value
        console.log(value) 
    })

    loginSubmit.addEventListener('click', function(e) {
        e.preventDefault()
        const email = loginForm.children[0].value
        const password = loginForm.children[1].value
        
        const loginForms = document.forms[0]
       
        console.log(loginForms)
    })
}

function onLoginSubmit(e)
{
    e.preventDefault()
    console.log('event', e)
}*/

window.onload = function()
{
    const first = document.getElementById('pcgames')
    const second = document.getElementById('books')

    first.addEventListener('click', function(e) {
        e.preventDefault()
        
        const el = document.getElementById('first')
        el.style.display = "block"
        
    })

    second.addEventListener('click', function(e) {
        e.preventDefault()
        
        const el2 = document.getElementById('second')
        el2.style.display = "block"
    })

}

