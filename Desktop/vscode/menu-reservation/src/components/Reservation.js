import React, {Component} from 'react';
import Reservationitem from './Reservationitem';
import PropTypes from 'prop-types';


class Reservation extends Component {
  
  
  
    render(){
     
    return this.props.reservation.map((reservation) =>(
           
            <Reservationitem key={reservation.id} reservation={reservation} delReservation={this.props.delReservation}
            />
            

    ));
}
}

Reservation.propTypes = {
    reservation: PropTypes.array.isRequired
}
export default Reservation;
