import React, {Component} from 'react';
import Header from './components/layout/Header';
import Reservation from './components/Reservation';
import AddReservation from './components/AddReservation';

import './App.css';

class App extends Component {

  state = {
    reservation: [
      {
        id: 1,
        CustName: 'Bob Law',
        Date: '12/20/19',
        OrderMenu: 'Chicken',
        completed: false

      },
      {
        id: 2,
        CustName: 'Dave Hernan',
        Date: '11/20/19',
        OrderMenu: 'Pizza',
        completed: false
      },
      {
        id: 3,
        CustName: 'Cyril Liwanag',
        Date: '10/20/19',
        OrderMenu: 'Spagetti',
        completed: false
      },
    ]
  }

  //delete
  delReservation = (id) => {
    this.setState({reservation: [...this.state.reservation.filter(reservation => reservation.id !== id)]});
  }
//addReservation
AddReservation = (CustName, Date, OrderMenu) => {
  const newReserver = {
    id: 4,
    CustName: CustName,
    Date: Date,
    OrderMenu: OrderMenu
  }
  this.setState({ reservation: [...this.state.reservation, newReserver]});
}

  render(){
   
    return (
      <div className="App">
        <Header />
        <AddReservation AddReservation={this.AddReservation}/>
         <Reservation reservation={this.state.reservation} delReservation = {this.delReservation}
  />
      </div>
  );
}
}
export default App;
