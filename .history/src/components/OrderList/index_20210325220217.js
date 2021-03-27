import React, { Component } from 'react';
import OrderItem from '../OrderItem'


class OrderList extends Component {
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