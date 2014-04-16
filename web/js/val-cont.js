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
                   mail.focus();
                   document.getElementById("mseemail").innerHTML=msje2;

               }
    }


}
function valecom(){
    var msjv="<span class='msj' style='color:green'>OK!!</span>";
    var com=document.getElementById("com").value;
    var msje1="<span class='msj' style='color:red'> Ingrese la Consulta!!</span>";
    
    if(com==null||com.length==0){
     document.getElementById("mseco").innerHTML=msje1;

    }else{
        
         document.getElementById("mseco").innerHTML=msjv;
    }
    
}  





/*function validar(){
var x=new Array();
x[0]=document.getElementById("nomb").value;
x[1]=document.getElementById("ape").value;
x[2]=document.getElementById("em").value;
x[3]=document.getElementById("tf").value;
//x[4]=document.getElementById("em").value;
//x[5]=document.getElementById("em").value;
//x[6]=document.getElementById("em").value;


var msj=new Array();

msj[0]="<span style='color:red'> Ingrese su Nombre!!</span>";
msj[1]="<span style='color:red'> Ingrese su Apellido!!</span>";
msj[2]="<span style='color:red'> Ingrese su Email!!</span>";
msj[3]="<span style='color:red'> Ingrese su Tel. Fijo!!</span>";



var id=new Array("msenom","mseape","mseemail","msetf");
var filtroE=/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
var filtroT=/^[0-9]{3,4}-??[0-9]{7,8}$/;
var i=0;
for(i in x){
      
      var error= msj[i];
      var div=id[i];
                //valida Email
                 if(i==2){
                        if(x[i]==""){
                             document.getElementById(div).innerHTML=error;
                             
                            }else{
                                 if(filtroE.test(x[i])){
                                            document.getElementById(div).innerHTML="<span style='color:green'>Mail Valido!!</span>";
                                            
                                       }else{
                                           document.getElementById(div).innerHTML="<span style='color:red'> Ingrese un mail valido!!</span>";
                                            
                                       }
                            }
                 }else{
                     //valida telefono
                    if(i==3){
                        if(x[i]==""){
                                document.getElementById(div).innerHTML=error;
                                 break;
                               }else{
                                    if(filtroT.test(x[i])){
                                               document.getElementById(div).innerHTML="<span style='color:green'>Tel. Valido!!</span>";
                                               
                                          }else{
                                              document.getElementById(div).innerHTML="<span style='color:red'> Ingrese un tel. valido!!</span>";
                                               
                                          }
                               }

                    }else{                    
                    //valida otra entrada 
                              if(x[i]==""){
                                    document.getElementById(div).innerHTML=error; 
                                    
                              }else{
                                  document.getElementById(div).innerHTML="<span style='color:green'>ok</span>";
                                   
                              }           
                
                    }
                }
                 
}//fin del for

}//fin de la funcion*/

function confirmar(){
var x=new Array();
x[0]=document.getElementById("nomb");
x[1]=document.getElementById("em");
x[2]=document.getElementById("com");

var id=new Array("msenom","mseemail","mseco");
  
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
    
    var id=new Array("msenom","mseemail","mseco");
    for(i in id){
        document.getElementById(id[i]).innerHTML=" ";
               
    }
}


    
   
        


