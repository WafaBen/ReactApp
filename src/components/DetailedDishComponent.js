import React, { Component } from 'react';
import { Card , CardImg, CardImgOverlay, CardText, CardTitle, CardBody,
         Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';



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
                    <div className="row">
                        <CommentForm />
                    </div>
                </div>
                
            );
        }
        else{
            return(
                <div className="row">
                        <CommentForm />
                </div>
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


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component {

    constructor (props){
        super(props);
        this.state ={
            isModalOpen : false,
        }
        this.toggleModal=this.toggleModal.bind(this);
        
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        });
    }
    handleSubmit(values){
        console.log("current state :"+ JSON.stringify(values));
        alert("current state :"+ JSON.stringify(values));
    }

    render(){
        return(
        <div>
            <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>Submit Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                    <Label htmlFor="rateDegree" md={{size:12}}>First Name</Label>
                        <Col md={{size:12}}>
                            <Control.select name="rateDegree" model=".rateDegree"
                            className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Control.select>
                        </Col>    
                    </Row>    
                    <Row className="form-group">
                        <Label htmlFor="name" md={{size:12}}>First Name</Label>
                        <Col md={{size:12}}>
                            <Control.text model=".name"  id="name" name="name"
                                className="form-control"
                                placeholder="Your Name"
                                validators={{
                                    required, minLength : minLength(2), maxLength : maxLength(15)
                                }}/>
                                <Errors className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength : 'Must be greater than 2 characters',
                                    maxLength : 'Must contain 15 characters or less'
                                }}
                                /> 
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="message" md={{size:12}}>Comments</Label>
                        <Col md={{size:12}}>
                            <Control.textarea model=".message" id="message" name="message"
                                className="form-control"
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10 ,offset:1}}>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
        );
    }
    
}    
export default DetailedDish;