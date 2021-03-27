import React, { Component } from 'react';
import OrderItem from '../OrderItem'


class OrderList extends Component {
  componentDidMount() {
    fetch('/mook/order.json').then((res) => {
      console.log(res)
      })
  }
    render() {
        return (
            <div>
                {data.map((item) => {
                    return <OrderItem data={item} key={item.id}/>
                })}
            </div>
        );
    }
}

export default OrderList;