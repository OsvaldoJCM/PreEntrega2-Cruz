import React from 'react'
import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getProductos, getProductoPorCateforia } from '../asyncmock'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductoPorCateforia : getProductos;
        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(err => console.log(err))

    }, [idCategoria])
    return (
        <div className='itemListContainer' >
            <h2 className='text-center my-4'>Nuestros Productos</h2>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer