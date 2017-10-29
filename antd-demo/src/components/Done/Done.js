import React, { Component } from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom'
import axios from 'axios'
class Done extends Component {

  state = {
    willdos:[]
  }

  componentDidMount = () => {
    axios.get('http://localhost:3008/willdos').then(res => {
      console.log(res.data)
      this.setState({
        willdos:res.data.filter(t=>t.clicked !== false)
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
        key: 'action',
        render: () => <Link to='' className='ant-dropdown-link'>订单详情</Link>
      }
    ]
    return (
      <div className='done'>
        <div>共<span>2</span>条订单</div>
        <Table columns={columns} dataSource={this.state.willdos} rowKey={t=>t.id}/>
      </div>
    )
  }
}
export default Done
