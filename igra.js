var zhelka, zajak;
var kraj=70;
var pocetokZajak=0;
var pocetokZhelka=0;
var indeksZ;
var indeksZh;
window.addEventListener( "load", start, false );

function funkcija(){
  setInterval(igra,1000);
}
function start()
{
  var button=document.getElementById("Kopche");
  button.addEventListener("click", funkcija, false );
}

function igra() {
  zajak = document.getElementById("zajak");
  zhelka = document.getElementById("zhelka");

  zhelka.style.marginLeft = dviziZhelka() + "%"; 
  zajak.style.marginLeft = dviziZajak()  + "%";
}




function dviziZajak() {
  
  var vZ=Math.floor(1+Math.random()*10);

  if(vZ>=1 && vZ<=2){
   indeksZ=pocetokZajak;
  }
  else if(vZ>=3&&vZ<=4){
   indeksZ=pocetokZajak+9;
  }
  else if(vZ==5){
    if((pocetokZajak-12-15)>=0){
     indeksZ=pocetokZajak-12;
    }else{
     indeksZ=pocetokZajak;
    }
  }
  else if(vZ>=6 && vZ<=8){
   indeksZ=pocetokZajak+1;
  }
  else{
    if((pocetokZajak-2-15)>=0){
     indeksZ=pocetokZajak-2;
    }else{
     indeksZ=pocetokZajak
    }
  }
  pocetokZajak=indeksZ;
  console.log(indeksZ);

  if(pocetokZajak>=70){
    alert("Zajakot pobedi!");
   indeksZ=70;
    window.location.reload();
  }
  return indeksZ;
    
}


function dviziZhelka() {
  
    var vZh=Math.floor(1+Math.random()*10);
  
      if (vZh >=1 && vZh<=5){
        indeksZh = pocetokZhelka +3;
      }
      else if (vZh>=6 && vZh <=7){
        if((pocetokZhelka-6-15)>=0){
          indeksZh = pocetokZhelka-6;
        }else{
          indeksZh=pocetokZhelka;
        }
      }
      else {
        indeksZh = pocetokZhelka+1;
      }
  
      pocetokZhelka= indeksZh;
  
      if(pocetokZhelka>=70){
        alert("Zhelkata pobedi!");
        indeksZh=70;
        window.location.reload();
      }
      console.log (indeksZh)
  
      return indeksZh;
  }