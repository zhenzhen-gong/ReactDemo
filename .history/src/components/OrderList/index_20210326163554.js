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

    handleSubmit = (id, comment, starts) => {
      console.log(id)
      //真实开发中对接后台服务器是这样操作
      // fetch('./saveComment').then(() => {
      //   .......
      // })

      const newData = this.state.data.map((item) => {
         return item.id === id? {...item, comment, starts, ifCommented:true} : item
       })
      console.log(newData)

       this.setState({
         data: newData
       })
    }
}

export default OrderList;