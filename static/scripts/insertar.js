const tittlemodal = document.getElementById('exampleModalLabel')
const contenidoModal = document.getElementById('cuerpito')
    function insertar(identificador) {

        switch (identificador) {
            case 'Producto':
                tittlemodal.innerHTML = "Insertar un Producto";
contenidoModal.innerHTML = `<form action="/v3/insertar" method="POST" id="insertarP">
  <label>Referencia <input type="text" name="referencia"></label>
  <label>Nombre <input type="text" name="nombre"></label>
  <label>Descripcion <input type="text" name="descripcion"></label>
  <label>Precio <input type="number" name="precio"></label>
  <label>Stock <input type="number" name="stock"></label>
  <label>Imagen <input type="text" name="imagen"></label>
  <label>Habilitado <input type="checkbox" name="habilitado"></label>
</form>`;
                break;

            default:
                break;
        }
    }

