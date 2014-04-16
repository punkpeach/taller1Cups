function valnomb(){
   
   var msje="<span class='msj' style='color:red'> Ingrese su Nombre!!</span>";
    var msjv="<span class='msj' style='color:green'>OK!!</span>";
    var nomb=document.getElementById("nomb").value;
    var filtro=/^\s+|\d+$/;
    
  //valida otra entrada 
  if(nomb==null||nomb.length==0||filtro.test(nomb)){
        document.getElementById("nomb").focus();
        document.getElementById("msenom").innerHTML=msje; 

  }else{
      document.getElementById("msenom").innerHTML=msjv;
  }  
}

function valape(){
  var msje="<span class='msj' style='color:red'> Ingrese su Apellido!</span>";
  var msjv="<span class='msj' style='color:green'>OK!!</span>";
  var filtro=/^\s+|\d+$/;
  var ape=document.getElementById("ape").value;
  //valida otra entrada 
   if(ape==null||ape.length==0||filtro.test(ape)){
      
        document.getElementById("mseape").innerHTML=msje; 

  }else{
      document.getElementById("mseape").innerHTML=msjv;
  }
}
function valeem(){
    var filtro=/^\s+$/;
    var filtroE=/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    var mail=document.getElementById("em").value;
    var msjv="<span class='msj' style='color:green'>Mail Valido!!</span>";
    var msje1="<span class='msj' style='color:red'> Ingrese su Email!!</span>";
    var msje2="<span class='msj' style='color:red'> Ingrese un mail valido!!</span>";
    
    
    if(mail==null||mail.length==0||filtro.test(mail)){
     document.getElementById("mseemail").innerHTML=msje1;
   
    }else{
         if(filtroE.test(mail)){
                    document.getElementById("mseemail").innerHTML=msjv;

               }else{                  
                   document.getElementById("mseemail").innerHTML=msje2;

               }
    }


}

function valetf(){
    var filtroT=/^[0-9]{3,4}[0-9]{8,8}$/;
    var tel=document.getElementById("tf").value;
    var msjv="<span class='msj' style='color:green'>Tel. Valido!!</span>";
    var msje1="<span class='msj' style='color:red'> Ingrese su Tel. Fijo!!</span>";
    var msje2="<span class='msj' style='color:red'> Ingrese un tel. valido!!</span>";
    
       if(tel==null||tel.length==0){
        
            document.getElementById("msetf").innerHTML=msje1;

           }else{
                if(filtroT.test(tel)){
                           document.getElementById("msetf").innerHTML=msjv;

                      }else{
                          tel.focus();
                          document.getElementById("msetf").innerHTML=msje2;

                      }
           }

}



function deshabilitar(){  
document.getElementById("nrootros").value=null;
    
    
}

function uncheck(buttonGroup){
    document.getElementById("msenro").innerHTML=" ";
  document.getElementById("nrootros").value=null;
  
  for (i=0; i < buttonGroup.length; i++) { 
   
    if (buttonGroup[i].checked == true) { // if a button in group is checked, 
          buttonGroup[i].checked = false;
            
        }
      
  }  
}
    





function valradio(){
    var filtroR=/^\d+$/;
      var filtro=/^\s+$/;
    var cant=document.getElementsByName("cantidad").length;
    
    var valor;  
    for (var i=0;i<cant;i++){
    valor=document.getElementsByName("cantidad").item(i).checked;
    
if (valor){
	ra=document.getElementsByName("cantidad").item(i).value;
        break;
}
}

if(valor==false){
    
    ra=document.getElementById("nrootros").value; 
}



    var msjv="<span class='msj' style='color:green'>OK!!</span>";
    var msje1="<span class='msj' style='color:red'> Ingrese el nro de personas!!</span>";
    var msje2="<span class='msj' style='color:red' > Ingrese un numero entre (1-20)!!</span>";
    
    
    if(ra==null||ra.length==0||filtro.test(ra)){
        document.getElementById("msenro").innerHTML=msje1;
        
    }else{
        if((filtroR.test(ra)) && (ra>=1) && (ra<=20) ){
            document.getElementById("msenro").innerHTML=msjv;
        }else{
            document.getElementById("msenro").innerHTML=msje2;
        }
    }
    
    
    
}
function valfech(){
    var filtroF=/^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    var fe=document.getElementById("dia").value;
    var msjv="<span class='msj' style='color:green'>Fecha Valida!!</span>";
    var msje1="<span class='msj' style='color:red'> Ingrese la Fecha de Reserva!!</span>";
    var msje2="<span class='msj' style='color:red'> Ingrese una Fecha Valida!!</span>";
    
       if(fe==""){
            document.getElementById("msefech").innerHTML=msje1;

           }else{
               
                if(filtroF.test(fe)){
                           document.getElementById("msefech").innerHTML=msjv;

                      }else{
                          document.getElementById("msefech").innerHTML=msje2;

                      }
           }

}
function valhor(){
    var filtroH=/^(0[0-9]|1\d|2[0-3]):([0-5]\d)$/;
    var hor=document.getElementById("hora").value;
    var msjv="<span class='msj' style='color:green'>Hora Valida!!</span>";
    var msje1="<span class='msj' style='color:red'> Ingrese la Hora de Reserva!!</span>";
    var msje2="<span class='msj' style='color:red'> Ingrese una Hora Valida!!</span>";
    
       if(hor==""){
            document.getElementById("msehor").innerHTML=msje1;

           }else{
               
                if(filtroH.test(hor)){
                           document.getElementById("msehor").innerHTML=msjv;

                      }else{
                          document.getElementById("msehor").innerHTML=msje2;

                      }
           }

}
    





function confirmar(){
var x=new Array();
x[0]=document.getElementById("nomb");
x[1]=document.getElementById("ape");
x[2]=document.getElementById("em");
x[3]=document.getElementById("tf");

    var valor;  
    var cant=document.getElementsByName("cantidad").length;
    for (var i=0;i<cant;i++){
    valor=document.getElementsByName('cantidad').item(i).checked;
   
 
if (valor){
	x[4]=document.getElementsByName('cantidad').item(i);
	break;
}
}
if(valor==false){    
    x[4]=document.getElementById("nrootros");
    
}
x[5]=document.getElementById("dia");
x[6]=document.getElementById("hora");


var id=new Array("msenom","mseape","mseemail","msetf","msenro","msefech","msehor");
  
var msj="<span style='color:red'> Falta la informacion!!</span>";
var b=true;

for(i in x){
    if(x[i].value==null||x[i].value.length==0){
        
        document.getElementById(id[i]).innerHTML=msj;
        b=false;        
    }
}
if(b==false){
     alert("!-No se envio el formulario (Falta Informacion)   ");
     return false;
    
}else{
     alert("Formulario enviado");
    return true;    
}   
}
function borrarerror(){
    
    var id=new Array("msenom","mseape","mseemail","msetf","msenro","msefech","msehor");
    for(i in id){
        document.getElementById(id[i]).innerHTML="";
               
    }
}


    
   
        


