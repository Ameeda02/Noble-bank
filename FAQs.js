var faq = document.getElementsByClassName("faq_question");
var i;
for (i=0; i<faq.length; i++){
    faq[i].addEventListener("click", function(){
        /*toggle between adding and removing the "active" class,to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block"){
            body.style.display = "none";
        }
        else{
            body.style.display = "block";
        }
    });
}
input = document.getElementById('search');
        filter=input.value.toUpperCase();
        section=document.getElementsByClassName("Questions");
        let x=document.getElementsByClassName('faq_question');
    
        for (i=0; i < x.length; i++) {
            h1 = 
            x[i].getElementsByTagName("h1")
            [0];
            txtvalue = h1.textcontent ||h1.innerText;
            if (!x[i].innerHTML.toUpperCase () . indexOf(filter) > -1) {
                x[i].style.display="";
            }
            else {
                x[i].style.display="none";
            }
        }
    