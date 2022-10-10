function one()
{
    document.querySelectorAll("button")[0].addEventListener("click",function()
    {
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
        
    })
    document.querySelectorAll("button")[1].addEventListener("click",function()
    {
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        
    })
    document.querySelectorAll("button")[2].addEventListener("click",function()
    {
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
        
    })
    document.querySelectorAll("button")[3].addEventListener("click",function()
    {
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
        
    })
    document.querySelectorAll("button")[4].addEventListener("click",function()
    {
        var snare = new Audio("snare.mp3");
        snare.play();
        
    })
    document.querySelectorAll("button")[5].addEventListener("click",function()
    {
        var crash = new Audio("crash.mp3");
        crash.play();
        
    })
    document.querySelectorAll("button")[6].addEventListener("click",function()
    {
        var kick = new Audio("kick-bass.mp3");
        kick.play();
        
    })
    
}
