import React, { Component } from 'react';
import OrderItem from '../OrderItem'


class OrderList extends Component {
constructor(props) {
   super(props)
   this.state = {
     data: []
   }
}
  componentDidMount() {
    fetch('/mook/orders.json').then((res) => {
      console.log(res)
      if(res.ok) {
        res.json().then(data => {
          this.setState({
            data
          })
        })
      }
      })
  }
    render() {
        return (
            <div>
                {this.state.data.map((item) => {
                    return <OrderItem data={item} key={item.id} onSubmit={this.handleSubmit}/>
                })}
            </div>
        );
    }
}

export default OrderList;