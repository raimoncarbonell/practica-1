

function validarEdat()
               {
                   var fecha = new Date();
                   var ano = fecha.getFullYear(); // guarda el valor añy actual en any
                    var any = document.getElementById("any").value;// recull el any que entra l'usuari
                   var r = document.getElementById("res");// mostra el resultat 
                   var resta=ano-any; // fa la resta entre en any actual i la data de naixement
                   
                   if(resta>=18) // condicio que comproba si esta es major i igual a 18.
                   {
                       // Mostra que es menor d'edat
                       r.value = " tens "+resta+" anys es Major d'edat";
                   }
                   else
                    {
                        // Mostra que es major d'edat
                            r.value = " tens"+resta+"anys es Menor d'edat";
                    }
               }

 function BParells ()
               {
                   
                        var num = document.getElementById("num").value;// recull el mun que entra l'usuari
                       var r = document.getElementById("res");// mostra el resultat 
                     r.value="";
                    var i=0;
                   var aux="";
                    while(i<=num)
                        {
                        if(i%2==0){ aux += i+","; }// guarda en la variable i els numeros parells 
                        i++;
                        }
                   r.value=aux;// mostra els numeros parells 
               }

                

 function BParellsF ()
               {
                   
                    var num = document.getElementById("num2").value;// recull el mun que entra l'usuari
                    var r = document.getElementById("res2");// mostra el resultat 
                   r.value="";
                   var aux="";
                  for(var i=0;i<=num;i++)
                        {
                        if(i%2==0){ aux += i+","; }// guarda en la variable i els numeros parells 
                        
                        }
                   r.value=aux;// mostra els numeros parells 
               }
function Suma(num1,num2)
{
    var num1= document.getElementById("num1").value;// recull el mun que entra l'usuari
    var num2 = document.getElementById("num2").value;// recull el mun que entra l'usuari
    var r = document.getElementById("res2");// mostra el resultat 
    var aux="";
    r.value="";
    r.value= parseInt(num1)+parseInt(num2);
    return r.value;
}
function ParseInt()
{
    

var num= document.getElementById("num").value;// recull el mun que entra l'usuari
var r = document.getElementById("res");// mostra el resultat 
   
r.value= parseInt(num);  
}

function Exprompt() {
    var nom = prompt("Possa el teu nom ");
    if (nom != null) {
        document.getElementById("Exprompt").innerHTML =
        "Hola " + nom;
    }
    
    
}
function Malert() {
   alert("Exemple de alert");
    }

function DataActual()
{
    var f = new Date();
      var r = document.getElementById("res");// mostra el resultat 
var data=(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
   r.value=data;
  
}

function MostrarValoresTabla()
{
    

    var tabla = [
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12]
            ];
    
            document.write("<table border='1'>");
            for(var i=0; i<tabla.length; i++){
                document.write("<tr>");
                for(var j=0; j<tabla[i].length; j++){
                    document.write("<td>"+tabla[i][j]+"</td>");
                }
                document.write("</tr>");
            }
            document.write("</table>")
}

function sumaValorFilas()
{
     var tabla = [
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12]
            ];
    
    for ( var i=0;i<tabla.length;i++)
        {
            var suma=0;
            var num=0;
            for ( var j=0 ; j<tabla[i].length;j++)
                {
                    num=tabla[i][j];
                    suma=suma+num
                    
                }
            document.write ("suma  fila "+i+" "+suma+"<br>" );
        }
}
var ValRetornoTemporizador;

function Inici() {
    ValRetornoTemporizador = setInterval(MuestraTexto, 1000);
}

function MuestraTexto(param1) {
    document.getElementById("res").innerHTML += "Hola ";

    
}

function Para() {
    clearInterval(ValRetornoTemporizador);
}

// part del codi per la paguina Acces a elements de document 
 function ColorFonsP()
{
    var x = document.querySelectorAll("p.estil");
   
    for (var i=0 ;i<=x.length;i++)
        {
             x[i].style.backgroundColor = "red";
        }
}
function dquadrat()
{
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    
}

 dquadrat();