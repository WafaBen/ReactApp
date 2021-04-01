import React from 'react';
import { Card , CardImg, CardImgOverlay, CardText, CardTitle, CardBody,
         Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


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
                <div className="container">
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
                <div key={dish.id} className="container" >
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 mt-5 offset-1">
                        <Card >
                            <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                            <CardTitle  heading>{dish.name}</CardTitle> 
                            <CardBody >
                                <p>{dish.description}</p>
                            </CardBody>
                        </Card>
                    </div>
                    
                    <div className="col-12 col-md-5 mt-5 ">
                        <RenderComments comments={props.comments} />
                    </div>
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