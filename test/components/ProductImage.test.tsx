import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from "../../src/components";
import { products } from '../data/products';


describe('ProductImage', () => { 
    test('Debe mostrar el componente correctamente con la imagen personalizada', () => { 
        const wrapper = renderer.create(
            <ProductImage img='hola.jpg' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('debe mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={products[1]} className='custom-class'>
                {
                    ()=>(
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})