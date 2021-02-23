var arrayDatos=[]
function recogerDatos(){
    //recojo nombre
 let nombre =  document.getElementById("nombre").value
 let apellidos =  document.getElementById("apellidos").value
 let edad =  document.getElementById("edad").value
 let telefono =  document.getElementById("telefono").value
//  document.getElementById("resultado").innerHTML = "el nombre es + nombre, el apellido es + apellido

let dato = { "nombre":nombre,"apellidos":apellidos,"telefono":telefono,"edad:":edad} 
 console.log(dato)
 arrayDatos.push(dato)
}

function filtrarNombre(){
    
    for(let i=0;i<arrayDatos.length;i++){
        
        if(arrayDatos[i].nombre.includes("r")){
            console.log(" " + arrayDatos[i].nombre + " contiene R")
        }
    }
}

