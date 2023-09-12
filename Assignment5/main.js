function postFunction (){
    var text = document.getElementById("text1").value;
    var topic1 = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2"); 
    if (text) {
        if(!topic1.innerHTML) {
            topic1.innerHTML = text;  
        }
        else if (!comment1.innerHTML) {
            comment1.innerHTML = text;
        }
        else if (!comment2.innerHTML) {
            comment2.innerHTML = text;
        }

    } 
}
function clearFunction(){
    document.getElementById("topic1").innerHTML="";
    document.getElementById("comment1").innerHTML="";
    document.getElementById("comment2").innerHTML="";
    document.getElementById("text1").value;
}



