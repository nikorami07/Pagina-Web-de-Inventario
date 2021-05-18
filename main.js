


function borrar() {
    alert('Se borro el contenido');
}

    const codigo = document.getElementById("codigo");
    const categoria = document.getElementById("categoria");
    const descripcion = document.getElementById("descripcion");
    const estado = document.getElementById("estado");
    const pPrincipal = document.getElementById("pPrincipal");
    const eav = document.getElementById("eav");
    const pCompra = document.getElementById("pCompra");
    const cCompra = document.getElementById("cCompra");
    const precio = document.getElementById("precio");


    const datosCodigo = document.getElementById("datos-codigo");
   // const datosCategoria = document.getElementById("datos-categoria");


    const form = document.getElementById("form");


form.onsubmit = (e) =>{
    e.preventDefault();
    if (codigo.value && categoria.value && descripcion.value && estado.value && pPrincipal.value 
        && eav.value && pCompra.value && cCompra.value && precio.value === true | 1){
        datosCodigo.innerHTML += '<p>' + codigo.value + '<br>' + categoria.value + '<br>' +
        descripcion.value + '<br>' + estado.value + '<br>' + pPrincipal.value + '<br>' +
        eav.value + '<br>' + pCompra.value + '<br>' + cCompra.value + '<br>' + precio.value + 
        '</p>';
    }else{
        alert('Llene todos los datos');
    }
}

