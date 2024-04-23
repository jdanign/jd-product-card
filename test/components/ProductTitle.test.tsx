import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from "../../src/components";
import { products } from '../data/products';


describe('ProductTitle', () => { 
    test('Debe mostrar el componente correctamente con el título personalizado', () => { 
        const wrapper = renderer.create(
            <ProductTitle title='Custom Product' className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('debe mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={products[0]} className='custom-class'>
                {
                    ()=>(
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})