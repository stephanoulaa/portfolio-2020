console.log('woot')

$(document).ready(function() {
    $('.submit').click(function (event) {
//        event.preventDefault()
        console.log("clicked button")
        
        //define values
        var name = $('.name').val()
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        //validate values
        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')
            //console.log("email is valid")
        } else {
            event.preventDefault() //will ensure form will not submit when email is invalid
            statusElm.append('<div>Email is not valid</div>')
            //console.log("email is not valid")
        }
        
        
        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault() //will ensure form will not submit when subject is invalid
            statusElm.append('<div>Subject is not valid</div>')
        }
        
        if(message.length > 10) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault() //will ensure form will not submit when message is invalid
            statusElm.append('<div>Message is not valid</div>')
        }
        
    })
})