// 1 => Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

const links = document.getElementsByTagName("a")

for (const link of links) {
    link.addEventListener("click", (link) => {
        link.preventDefault();
    })
}

// 2 => Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
// 2.1 => Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const imagenes = document.getElementsByTagName("img")

const imagenesSeguras = []

for (const imagen of imagenes) {
    imagenesSeguras.push(imagen.src)
    imagen.addEventListener("click", () => {
        imagen.src = getRandom(gifs)
    })
}

// 2.2 => 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const parrafos = document.getElementsByTagName("p")

for (const parrafo of parrafos) {
    parrafo.addEventListener("click", () => {
        parrafo.style.color = "white";
        parrafo.style.backgroundColor = getRandom(paleta)
    })
}

// 2.3 => Bloques de article o section: Cambia el color de fondo.
const articulos = document.getElementsByTagName("article");

for (const articulo of articulos) {
    articulo.addEventListener("click", () => {
        articulo.style.backgroundColor = getRandom(paleta)
    })
}

// 3 => Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.
// 3.1 => Imágenes: Cambia la imagen por el gif abracadabra.gif.

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", () => {
        imagenes[i].src = "./assets/abracadabra.gif"
    })
    imagenes[i].addEventListener("mouseout", () => {
        console.log(imagenesSeguras)
        imagenes[i].src = imagenesSeguras[i]
    })
}

// 3.2 => Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseover", () => {
        parrafo.style.color = getRandom(paleta)
    })
    parrafo.addEventListener("mouseout", () => {
        parrafo.style.color = getRandom(paleta)
    })
}

//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
for (const articulo of articulos) {
    articulo.addEventListener("mouseover", () => {
        articulo.style.backgroundColor = getRandom(paleta)
    })
    articulo.addEventListener("mouseout", () => {
        articulo.style.backgroundColor = getRandom(paleta)
    })
}

/* P-R-E-M-I-U-M */
const getRandom = (data) => { return data[parseInt(Math.random() * data.length)] }

const paleta = ["#8ECAE6", "#219EBC", "#023047", "#FFB703", "#FB8500"]
const gifs = ["./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"]