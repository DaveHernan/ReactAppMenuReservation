import React, { Component } from 'react'


export class AddReservation extends Component {

state = {
    CustName: '',
    Date: '',
    OrderMenu: ''
}
onSubmit = (e) => {
    e.preventdefault();
    this.props.AddReservation(this.state.CustName);
    this.props.AddReservation(this.state.Date);
    this.props.AddReservation(this.state.OrderMenu);
    this.setState({CustName: ''});
    this.setState({Date: ''});
    this.setState({OrderMenu: ''});
}

onChange = (e) => this.setState({[e.target.name]: e.target.value});



    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{display: 'flex'}}>
                <input
                type="text"
                name=  "CustName"
                style = {{flex: '10', padding: '5px'}}
                placeholder = "add reservation"
                value={this.state.CustName}
                onChange={this.onChange}
                />
                      <input
                type="text"
                name=  "Date"
                style = {{flex: '10', padding: '5px'}}
                placeholder = "Date of purchase"
                value={this.state.Date}
                onChange={this.onChange}
            
                />
                 <input
                type="text"
                name=  "OrderMenu"
                style = {{flex: '10', padding: '5px'}}
                placeholder = "add order"
                value={this.state.OrderMenu}
                onChange={this.onChange}
                />
                  <input
                type="submit"
                value="Submit"
                className="btn"
                style={{flex:'1'}}
                />
                
            </form>
        )
    }
}

export default AddReservation
