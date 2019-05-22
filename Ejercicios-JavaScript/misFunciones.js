/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function saludar(){
    alert("Hola Mundo");
}

function convertir(id_elem, valor_elem)
{
    if(isNaN(valor_elem))
    {
        alert("Error: el valor de " +id_elem+ " debe ser numerico.");
        document.getElementById(id_elem).value="";
    }
    if(!isNaN(valor_elem))
    {
    if(id_elem=='metro')
    {
        document.getElementById("pulgada").value = 39.3701*valor_elem;
        document.getElementById("yarda").value=1.09361*valor_elem;
        document.getElementById("pie").value=3.28084*valor_elem;
    }
    if(id_elem=="pulgada")
    {
        document.getElementById("metro").value=valor_elem/39.3701;
        convertir("metro",(valor_elem/39.3701));
    }
    if(id_elem=="pie")
    {
        document.getElementById("metro").value=valor_elem/3.28084;
        convertir("metro",(valor_elem/3.28084));
    }
    if(id_elem=="yarda")
    {
        document.getElementById("metro").value=valor_elem/1.09361;
        convertir("metro",(valor_elem/1.09361));
    }
}
}