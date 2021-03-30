import { DetailedDish } from './DetailedDishComponent';
import React, { Component } from 'react';
import { Card , CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish:null
        }
    }
    onDishSelect(dish){
        this.setState({selectedDish : dish});
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <DetailedDish dish={dish}/>
            );
        else
            return(
                <div></div>
            );
    }
    render(){
        const menu=this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-5">
                    <Card onClick ={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle> 
                        </CardImgOverlay>    
                    </Card>
                    
                </div>
            );
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DetailedDish dish={this.state.selectedDish}/>
            </div>

        );
    }
}

export default Menu;

