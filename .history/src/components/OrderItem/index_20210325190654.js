import React, { Component } from 'react';

class OrderItem extends Component {
    render() {
        return (
            <div className="orderItem">
                <div className="orderItem-picContainer">
                    <img className="orderItem-pic"/>
                </div>
                <div className="orderItem-content">
                    <div className="orderItem-product">产品名称</div>
                    <div className="orderItem-shop">商家名称</div>
                </div>
                <div className="orderItem-detail">
                    <div className="orderItem-price">13</div>
                    <div><button className="orderItem-btn">评价</button></div>
                </div>
            </div>
        );
    }
}

export default OrderItem;