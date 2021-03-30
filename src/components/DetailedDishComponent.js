import React from 'react';
import { Card , CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';


    function RenderComments({comments})
    {
        if(comments != null){
            const listComments=comments.map((comment) =>
            { 
                return(
                <li>
                    <p>{comment.comment}</p>
                    <p>{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
                );
                
            });
            return(
                <div class="container">
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
    const DetailedDish=(props) =>
    {
        const dish=props.dish;
         if(dish != null){
            return(
                <div key={dish.id} class="row container" >
                    <div className="col-12 col-md-5 mt-5 offset-1">
                        <Card >
                            <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                            <CardTitle  heading>{dish.name}</CardTitle> 
                            <CardBody >
                                <p>{dish.description}</p>
                            </CardBody>
                        </Card>
                    </div>
                    
                    <div class="col-12 col-md-5 mt-5 ">
                        <RenderComments comments={props.dish.comments} />
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

    
export default DetailedDish;