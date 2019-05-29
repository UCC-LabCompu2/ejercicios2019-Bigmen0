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

function suma()
{
    document.opeMat.sum_total.value = Number(document.opeMat.sum_num1.value) + Number(document.opeMat.sum_num2.value);
}

function resta()
{
    document.opeMat.res_total.value= Number(document.opeMat.res_num1.value) - Number(document.opeMat.res_num2.value);
}

function multiplica()
{
    document.opeMat.mul_total.value= Number(document.opeMat.mul_num1.value) * Number(document.opeMat.mul_num2.value);
}

function divide(){

}

function gradosRadianes(id_elem, valor){
    if(id_elem=="radianes")
    {
        document.getElementById("grados").value=(valor*180)/Math.PI;
    }
    if(id_elem=="grados")
    {
        document.getElementById("radianes").value=(valor*Math.PI)/180;
    }
}

function mostrar_ocultar(id_elem){
    if(id_elem=="ocultarDiv"){
        document.getElementById("unDiv").style.display = 'none';
    }
    if(id_elem=="mostrarDiv"){
        document.getElementById("unDiv").style.display = 'block';
    }
}