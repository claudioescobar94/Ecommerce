import React from 'react'
import {Routes, Route  } from "react-router-dom";
import { Inicio } from './Inicio';
import { ProductosLista } from './Productos';


export const Paginas = () => {
  return (

      <Routes>
        <Route path='/' exact component={Inicio} />
        <Route path='/productos' exact component={ProductosLista} />   
      </Routes>
  )
}
