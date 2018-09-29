var opened = true;

function bandeau(){

    var band = document.getElementById("bandeau");
    var btn1 = document.getElementById("button-bar1");
    var btn2 = document.getElementById("button-bar2");
    
    band.style.display="none";
    btn1.style.display="flex";
    btn2.style.display="flex";
        
    
    if( opened == false )
    {
        band.style.display="flex";
        btn1.style.display="none";
        btn2.style.display="none";
    }

    opened = !opened;
}     

bandeau();
