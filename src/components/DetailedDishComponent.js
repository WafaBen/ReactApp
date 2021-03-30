import React, { Component } from 'react';
import { Card , CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';


export class DetailedDish extends Component{
    constructor(props){
        super(props);
        
    }
    renderComments(comments){
        if(comments != null){
            const listComments=comments.map((comment) =>
            { 
                return(
                <li>
                    <p>{comment.comment}</p>
                    <p>{comment.author}</p>
                </li>
                );
                
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {listComments}
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
    render(){
        const dish=this.props.dish;
         if(dish != null){
            return(
                <div key={dish.id} class="row container" >
                    <Card onClick ={() => this.onDishSelect(dish)} className="col-12 col-md-5 mt-5">
                        <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                        <CardTitle  heading>{dish.name}</CardTitle> 
                        <CardBody >
                            <p>{dish.description}</p>
                        </CardBody>
                    </Card>
                    <div class="col-12 col-md-5 mt-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                    
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}

