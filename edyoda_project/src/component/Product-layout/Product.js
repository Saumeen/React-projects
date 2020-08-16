import React, { Component } from 'react'

import classes from './Product.module.css';
import { Container, Row ,Col,Image, Button} from 'react-bootstrap';

class Product extends Component{

    state={
        imageUrl : 'https://imgur.com/Mplj1YR.png'
    };

    imageClicked = (url) =>{
        this.setState({imageUrl: url});
        console.log("Changed");

    }

    colorOption = this.props.coloroption.map( (item,pos)=>{
    return(
            <Col lg={2} key={pos}>
                <Image className={classes.product_image} 
                 src={item.imageUrl} rounded onClick={() =>this.imageClicked(item.imageUrl)} />
            </Col>
    )
    
    });

    
    
   render() {
       
    return(
        <Container>
        <Row>
            <Col>
                <div >
                    <Image src={this.state.imageUrl} className={classes.product_image_one}></Image>
                </div>
            
            </Col>
            <Col>
            <div className={classes.product}>
            <div className={classes.product_title}>{this.props.title}</div>
            <div className={classes.product_disc}>{this.props.desc}</div>
            <div className={classes.product_selectHeading}>{this.props.selectheading}</div>
            <div>
                <Container><Row>{this.colorOption}</Row></Container>
            </div>
            <div className={classes.product_selectHeading}>{this.props.features}</div>
            <div className={classes.product_button}>
                <Container><Row>
                    <Col lg={2}><Button variant="secondary">Time</Button></Col>
                    <Col lg={6}><Button variant="dark">Heart Rate</Button></Col>
                    </Row></Container>

            </div>
            <div className={classes.product_button}>
                <Container><Row>
                    <Col lg={5}><Button variant="info">Buy Now</Button></Col>
                    </Row></Container>

            </div>

        </div>
            </Col>
        </Row>
        
     </Container>
        
    )
   }
}


export default Product;