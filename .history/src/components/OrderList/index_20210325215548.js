import React, { Component } from 'react';
import OrderItem from '../OrderItem'

const data = [
    {
      id: 1,
      shop: '院落创意菜',
      picture: 'https://gd1.alicdn.com/imgextra/i4/17377818/TB2JDftqAKWBuNjy1zjXXcOypXa_!!17377818.jpg',
      product: '百香果（冷饮） 1扎',
      price: 19.9,
      ifCommented: true
    },
    {
      id: 2,
      shop: 'coco奶茶',
      picture: 'https://img.alicdn.com/imgextra/i2/708298664/O1CN01dCcXzG2DsA72W4ctV_!!708298664.jpg',
      product: '青苹果乐园 1扎',
      price: 24,
      ifCommented: false
    },
    {
      id: 3,
      shop: '瑞信咖啡',
      picture: 'https://img.alicdn.com/imgextra/i4/644216784/O1CN01s2OaL51zz7Wz9Thlj_!!644216784.jpg',
      product: '珍珠奶茶 1扎',
      price: 14,
      ifCommented: false
    },
    {
      id: 4,
      shop: '贡茶',
      picture: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/1016852150/O1CN01Cy4lRR1Rkk9caSj6i_!!1016852150.jpg_60x60q90.jpg',
      product: '红豆之恋 1扎',
      price: 18,
      ifCommented: false
    },
    {
      id: 5,
      shop: '喜茶',
      picture: 'https://gd2.alicdn.com/imgextra/i2/17377818/TB2cf2IqrGYBuNjy0FoXXciBFXa_!!17377818.jpg',
      product: '原为咖啡 1扎',
      price: 30,
      ifCommented: true
    },
]

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