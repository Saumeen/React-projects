import React,{Component}  from 'react';

import Procuct from '../../Database/Product';
import Header from '../../component/Header/Header';
import ProductLayout from '../../component/Product-layout/Product'

class HomePage extends Component{
    
render() {
        return (
            <>
            <Header></Header>
            <ProductLayout
                title={Procuct.title} 
                desc={Procuct.description}
                selectheading="Select Color"
                coloroption = {Procuct.colorOptions}
                features="Features"
            >
                
            </ProductLayout>
            
            </>
        )
}}

export default HomePage;
