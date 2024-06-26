import React, { createContext } from 'react';

import { ProductContextProps, ProductCardProps } from '../interfaces';

import { useProduct } from '../hooks';

import styles from '../styles/styles.module.css'




/** Contexto creado para compartir propieades entre componentes. */
export const ProductContext = createContext({} as ProductContextProps);

const {Provider} = ProductContext;


/**
 * Patron de diseño Compound Component Pattern:
 * Este componente puede compartir estado entre componentes 
 * hijos, sin tener que pasar props explícitamente a través 
 * de cada nivel del árbol de componentes.
 * El provider almacena las propiedades que serán accesibles a través
 * del useContext en los componentes hijos.
 * Este componente puede llamar a sus componentes hijos como propiedades del mismo,
 * las propiedades  se establecen en el propio index.ts
 * 
 * Patrón de diseño Extensible Styles:
 * Recibe la prop className para añadirla a las clases que ya tenga el propio componente.
 * Recibe la prop style para añadirla a los estilos que ya tenga el propio componente.
 */
export const ProductCard = ({children, product, className='', style, onChange, value=0, initialValues}:ProductCardProps)=>{
    const {
        counter, maxCount, isMaxCountReached, increaseBy, reset
    } = useProduct({
        product, value, initialValues, onChange,
    });


    return (
        <Provider 
            value={{product, counter, maxCount, increaseBy}}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </div>
        </Provider>
    )
}


export default ProductCard;