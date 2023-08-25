urls=[
    "https://enlatitud25.com/",
    "https://www.abc.com.py/",
    "https://www.ultimahora.com/"

];

cont=0;
//length-1 o +1

function sig() {
    if (cont<3){
        cont=cont+1;
    }
    else{
        cont=0;
    } 
    document.getElementById('iframe_a').src=urls[cont];}

function ant(){
    if(cont>0){
        cont=cont-1;
    }
    else{
        cont=0;
    }
    document.getElementById('iframe_a').src=urls[cont];}

function agr(){

    let link = prompt("Ingrese un link");
        if (link != null || link != ""){
            urls.push(link)
        }           
}
