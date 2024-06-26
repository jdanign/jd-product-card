import React, { useContext } from "react";

import { ProductImageProps } from "../interfaces";

import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'




/**
 * Patron de diseño: Compound Component Pattern.
 * Consume las propiedades del contexto generado en ProductContext.
 */
export const ProductImage = ({img='', className='', style}:ProductImageProps)=>{
    const {product} = useContext(ProductContext);

    const imgToShow:string = img ? img : (product.img ? product.img : noImage);


    return (
        <img src={imgToShow} alt="Product" className={`${styles.productImg} ${className}`} style={style} />
    )
}