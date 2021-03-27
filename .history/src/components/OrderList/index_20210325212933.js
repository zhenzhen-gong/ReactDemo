import React, { Component } from 'react';
import OrderItem from '../OrderItem'

const data = {
    id: 1,
    shop: '院落创意菜',
    picture: 'https://img.alicdn.com/imgextra/i2/708298664/O1CN01DoXBv02DsA6yn50xs_!!708298664.jpg',
    price: '百香果（冷饮） 1扎',
    price: 19.9,
    ifCommented: true
}

class OrderList extends Component {
    render() {
        return (
            <div>
                <OrderItem data=/>
            </div>
        );
    }
}

export default OrderList;