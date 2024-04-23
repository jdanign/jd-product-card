import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from "../../src/components";
import { products } from '../data/products';


const {act} = renderer;


describe('ProductCard', () => { 
    test('debe mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={products[0]} className='custom-class'>
                {
                    ()=>(
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })

    test('debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProductCard product={products[0]} className='custom-class'>
                {
                    ({count, increaseBy})=>(
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={()=> increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        // Como hace el cambio en el estado, es necesario que esté dentro de 'act'
        act(()=>{
            (tree as any).children[2].props.onClick();
        })
        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');
    })
})