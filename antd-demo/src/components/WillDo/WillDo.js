import React, { Component } from 'react'
import { Table , message} from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'
class WillDo extends Component {

  state = {
    willdos:[]
  }

  componentDidMount = () => {
    axios.get('http://localhost:3008/willdos').then(res => {
      console.log(res.data)
      this.setState({
        willdos:res.data
      })
    })
  }

  sendGood = (id,e) => {
    e.preventDefault();
    const { willdos } = this.state
    const data = {
      ...willdos.find(t => t.id === id),
      clicked:true
    }
    axios.put(`http://localhost:3008/willdos/${id}`,data).then(res => {
      message.info('发货成功！')
      this.setState({
        willdos:this.state.willdos.map(t => {
          if(t.id === id){
            return {...t,clicked:true}
          }
          return t
        })
      })
    })
  }
  render() {
    const columns = [
      {
        title: '菜品名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '下单时间',
        dataIndex: 'time',
        key: 'time'
      },
      {
        title: '顾客名',
        dataIndex: 'buyer',
        key: 'buyer'
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: (id) => <Link to='' onClick={(e) => this.sendGood(id,e)}>发货</Link>

      }
    ]
    const { willdos } = this.state
    const newWilldos = willdos.filter(t => t.clicked === false)
    return (
      <div className='will-do'>
        <div>共<span>2</span>条订单</div>
        <Table columns={columns} dataSource={newWilldos} rowKey={t=>t.id}/>
      </div>
    )
  }
}
export default WillDo
