import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            starts: props.starts || 0,
            comment: props.comment || '',
        }
    }
    render() {
        const { shop, product, price, picture, ifCommented} = this.props.data
        return (
            <div className="orderItem">
              <div className="orderItem__Container">
                <div className="orderItem__picContainer">
                    <img className="orderItem__pic" src={picture} alt=""/>
                </div>
                <div>
                  <div className="orderItem__content">
                      <div className="orderItem__product">{product}</div>
                      <div className="orderItem__shop">{shop}</div>
                  </div>
                  <div className="orderItem__detail">
                      <div className="orderItem__price">{price}</div>
                      <div>
                          {ifCommented? (
                             <button className="orderItem__btn orderItem__btn--grey">已评价</button>
                        ): (
                             <button className="orderItem__btn orderItem__btn--red" onClick={this.handleOpenEditerarea}>评价</button>
                        )}
                    </div>    
                  </div>
                </div>
              </div>
                {this.state.editing? this.renderEditArea() : null}
            </div>
        );
    }
    renderEditArea() {
        return (
            <div className="orderItem__commentContainer">
                <textarea className="orderItem__comment" onChange={this.handleCommentChange} value={this.state.comment}></textarea>
                {this.renderStarts()}                
                <button className="orderItem__btn orderItem__btn--red" onClick={this.handleSubmit}>提交</button>
                <button className="orderItem__btn orderItem__btn--grey" onClick={this.handleCancelSubmit}>取消</button>
            </div>
        )
    }

    renderStarts() {
        const {starts} = this.state
        return (
            <div>
            {[1,2,3,4,5].map((item, index) => {
                const light = starts >= item? 'orderItem__start--light' :'orderItem__start--nolight'
                return <span key={index} className={light} onClick={this.handleClickStart.bind(this, item)}>★</span>
            })}
            </div>
        )
    }

    handleOpenEditerarea = () => {
        this.setState({
            editing:true
        })
    }

    handleCommentChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleClickStart = (item) => {
        console.log(item)
        this.setState({
            starts: item
        })
    }

    handleCancelSubmit = () => {
        this.setState({
            editing: false,
            starts: this.props.starts || 0,
            comment: this.props.comment || '',
        })
    }   

    handleSubmit = () => {
        const {id} = this.props.data
        const {comment, starts} = this.state
        this.setState({
            editing: false,
        })
        this.props.onSubmit(id, comment, starts)
    }
}

export default OrderItem;