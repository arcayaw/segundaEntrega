//creo clase producto
class Prodcuto {
  //creo el constructor producto
  constructor(nombre, precio, categoria, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
  }
}

// localStorage.clear();

//creo un array vacio que almacenara los objetos que se llenen en el form
let arrayProductos = [];
let [a, b, c, d] = arrayProductos;

// if (localStorage.getItem("productos")) {
//   arrayProductos = JSON.parse(localStorage.getItem("productos"));
// } else {
//   localStorage.setItem("productos", JSON.stringify(arrayProductos));
// }

//operador Ternario
localStorage.getItem("productos")
  ? (arrayProductos = JSON.parse(localStorage.getItem("productos")))
  : localStorage.setItem("productos", JSON.stringify(arrayProductos));

//creo que una variable para los 3 eventos que voy mirar
let formProducto = document.getElementById("formProducto");
// let formCategoria = document.getElementById("formCategoria");
let botonMostrarProducto = document.getElementById("botonMostrarProducto");
let divProductos = document.getElementById("divProductos");

//tengo que consultar de una vez el evento, y prevenir el comportamiento por default

formProducto.addEventListener("submit", (e) => {
  e.preventDefault();

  //creo variables que almacenan cada uno de los valores del input
  let nombre = document.getElementById("nombre").value;
  let precio = document.getElementById("precio").value;
  let stock = document.getElementById("stock").value;
  let categoria = document.getElementById("categoria").value;

  if (
    !arrayProductos.some((productoEnArray) => productoEnArray.nombre == nombre)
  ) {
    const producto = new Prodcuto(nombre, precio, categoria, stock);
    arrayProductos.push(producto);
    localStorage.setItem("productos", JSON.stringify(arrayProductos));
    // formulario.reset();
  } else {
    yaRegistrado.innerHTML = `
      <p>El producto ${nombre} ya fue agregado previamente<p>
    `;
  }
  formProducto.reset();

  // //creo un nuevo objeto
  // const producto = new Prodcuto(nombre, precio, categoria, stock);

  // //paso el objeto al array
  // arrayProductos.push(producto);
  // console.log(arrayProductos);
  // formProducto.reset();
});

botonMostrarProducto.addEventListener("click", () => {
  if (arrayProductos.length !== 0) {
    divProductos.innerHTML = "";

    arrayProductos.forEach((productoEnArray, indice) => {
      divProductos.innerHTML += `
        <div class="card m-3" id="producto${indice}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${productoEnArray.nombre}</h5>
                <p class="card-text">Precio: ${productoEnArray.precio}</p>
                <p class="card-text">Stock: ${productoEnArray.stock} </p>
                <p class="card-text">Categoria: ${productoEnArray.categoria} </p>
                <a href="#" class="btn btn-primary">Eliminar</a>
            </div>
        </div>
        `;
    });
  } else {
    divProductos.innerHTML = "Aun no se han agregado productos";
  }
});

/* ********** */

// let cantidadElementos = arrayProductos.length;

// console.log(cantidadElementos);

/* ********** */

function desestructurame(nombre, precio, stock, categoria) {
  console.log(nombre);
  console.log(precio);
  console.log(stock);
  console.log(categoria);
}

desestructurame(arrayProductos);

console.log(...arrayProductos);
