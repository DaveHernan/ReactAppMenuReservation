import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class reservationitem extends Component {
   
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
           borderBottom: '1px #ccc dotted'
          
        }
    }


   
    render() {

        const { id, CustName, Date, OrderMenu} = this.props.reservation;
        return (
            <div style ={this.getStyle()}>
                
                            <table   style ={tableStyle}>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Order</th>
                            </tr>
                            <tr>
                                <td style={tdTable}>{CustName}</td>
                                <td style={tdTable}>{Date}</td>
                                <td style={tdTable}>{OrderMenu} </td>
                                
                            </tr>
                            </table>    
                            <button onClick={this.props.delReservation.bind(this, id)} style={btnStyle}>x</button>
                       
                           
  
                    
            </div>
        )
    }
}
reservationitem.propTypes = {
    reservation: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'black',
    color  : 'white',
    border: 'none',
    padding: '3px 6px',
    cursor: 'pointer',
    float: 'right'
  
    
}

const tableStyle = {
    bordercollapse: 'collapse',
    border: '1px solid ',
    width: '50%',
    padding: '10px'
}

const tdTable = 
{
    border: '1px solid ',
    textAlign: 'left',
    width: '25%'
  
}


export default reservationitem
