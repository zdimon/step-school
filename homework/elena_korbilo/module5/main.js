window.onload = function() {
    // const loginSubmit = document.getElementById('login-submit');
    // const loginForm = document.getElementById('login-form');
    const check = document.getElementsByTagName('input');
    const text = document.getElementsByTagName('textarea');
    

    /*const select = document.getElementsByTagName('select')

    select[0].addEventListener('change', function(e){
        const options = e.target.value;
        console.log(options)
    })*/

    // loginSubmit.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     // const email = loginForm.children[0].value
    //     // const password = loginForm.children[1].value
    //     // console.log(email, password)

    //     const loginForm = document.forms[0]
    //     console.log(loginForm)
    // })

    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function(){
            if(check[i].checked == true){
                text[i].style.cssText = 'display: inline;'
            }
            else{
                text[i].style.cssText = 'display: none;'
            }
        })
        
    }

}