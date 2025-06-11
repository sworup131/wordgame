//random word generator start
let wordlist= ["something","javascript","java","html","wordlist","keyboard","mouse"]
setInterval(addword,1000)

function addword(){
    let index=Math.floor(Math.random()*wordlist.length)   
    document.body.append(createspan(wordlist[index]))
}

function createspan(word){
    let span = document.createElement("span")
    span.innerHTML = word
    span.id = word
    let r = Math.random()*window.innerWidth;
    span.style.position = "absolute"
    span.style.right = `${r}px`;
    let top = 70;
    let setint = setInterval(drop,5)
    span.iid= setint
    console.log(span.iid)
    function drop(){
        top = top +1;
        span.style.top = `${top}px`
         if(top > window.innerHeight - 60)
         {
            span.remove();
            clearInterval(span.iid)
            alert("gameover");
            window.location.reload();
         }
    }
    
    return span;
}
//random word generator end


let score = 0
let typeword=""
let topp = document.getElementById("top")
let bottomm = document.getElementById("bottom")
document.onkeyup = function(e){
    if(e.key==" "){
        let elem = document.getElementById(typeword)
        if(elem){
            elem.remove();
            score += 1
            topp.innerHTML.append = ` ${score}`
            typeword ="" 
            bottomm.innerHTML = typeword
            clearInterval(elem.iid)

        }
       
    }
    else if(e.key == "Backspace"){
        typeword = typeword.slice(0,typeword.length -1)
        bottom.innerHTML = `typeword = ${typeword}`
    }
    else{
        typeword = typeword + e.key;
        bottom.innerHTML = `typeword = ${typeword}`
     }
    console.log(typeword)
    
    
}