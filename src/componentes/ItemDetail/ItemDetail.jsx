import React from 'react'

const ItemDetail = ({ id, nombre, material, img }) => {
    return (
        <div>
            <div className="card mx-5 my-5" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt={nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">Material : {material}.</p>
                            <button className='btn btn-secondary'> Cotizar</button>
                            <p className="card-text "><small className="text-muted align-bottom">Actualizado hace 5 dias</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail