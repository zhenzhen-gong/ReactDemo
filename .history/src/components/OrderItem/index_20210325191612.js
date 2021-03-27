import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
    render() {
        return (
            <div className="orderItem">
                <div className="orderItem__picContainer">
                    <img className="orderItem__pic"/>
                </div>
                <div className="orderItem__content">
                    <div className="orderItem__product">产品名称</div>
                    <div className="orderItem__shop">商家名称</div>
                </div>
                <div className="orderItem__detail">
                    <div className="orderItem__price">13</div>
                    <div><button className="orderItem__btn">评价</button></div>
                </div>
            </div>
        );
    }
}

export default OrderItem;