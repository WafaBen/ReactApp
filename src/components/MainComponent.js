import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import DetailedDish from './DetailedDishComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions : PROMOTIONS,
      leaders:LEADERS,
      comments:COMMENTS
    };
  }
  
  render(){
    const DishWithId =({match}) =>{
     return(<DetailedDish dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
     comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
   ); 
    }
    const HomePage=()=>{
        return(
            <Home  dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((lead) => lead.featured)[0]}/>
        );
    }
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route path='/menu/:dishId' component={DishWithId}/>
            <Route path="/contactus" component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default Main;
