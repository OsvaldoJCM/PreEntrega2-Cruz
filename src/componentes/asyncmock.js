const productos = [
    { id: "1", nombre: "Ventana", material: "PVC", img: "/img/pvc1.webp", idCat: "1" },
    { id: "2", nombre: "Persiana", material: "Metal", img: "/img/metal.webp", idCat: "2" },
    { id: "3", nombre: "Ventana", material: "Aluminio", img: "/img/metal.webp", idCat: "2" },
    { id: "4", nombre: "Baranda", material: "Vidrio", img: "/img/vidrio.webp", idCat: "3" },
    { id: "5", nombre: "Showerdoor", material: "Vidrio", img: "/img/vidrio2.webp", idCat: "3" }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000)
    })
}

export const getProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductoPorCateforia = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}