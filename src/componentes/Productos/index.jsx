import React, { useContext } from "react";
import productImage from "../../images/img01.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";


export const ProductosLista = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  console.log(productos)

  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="productos">
        <div className="producto">
          <Link to="">
            <div className="producto_img">
              <img src={productImage} alt="" />
            </div>
          </Link>
          <div className="producto_footer ">
            <h1>Title</h1>
            <p> Categoría</p>
            <p className="price"> $320</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <Link to="#" className="btn">
                Vista
              </Link>
            </div>
          </div>
        </div>

        <div className="producto">
          <Link to="">
            <div className="producto_img">
              <img src={productImage} alt="" />
            </div>
          </Link>
          <div className="producto_footer ">
            <h1>Title</h1>
            <p> Categoría</p>
            <p className="price"> $320</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <Link to="#" className="btn">
                Vista
              </Link>
            </div>
          </div>
        </div>
        <div className="producto">
          <Link to="">
            <div className="producto_img">
              <img src={productImage} alt="" />
            </div>
          </Link>
          <div className="producto_footer ">
            <h1>Title</h1>
            <p> Categoría</p>
            <p className="price"> $320</p>
          </div>
          <div className="buttom">
            <button className="btn">Añadir al carrito</button>
            <div>
              <Link to="#" className="btn">
                Vista
              </Link>
            </div>
          </div>
        </div>

      </div> 
    </>
  );
};
