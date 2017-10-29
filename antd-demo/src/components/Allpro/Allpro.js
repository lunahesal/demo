import React, { Component } from 'react'
import { Table, message} from 'antd';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Poster = styled.img`
  width:60px;
`


class Allpro extends Component {

  state = {
    columns : [
      {
        title: '海报',
        dataIndex: 'url',
        key: 'url',
        render: text => <Poster src={text} alt="poster"/>
      },
      {
        title: '菜品名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (
          <Link to='' onClick={(e) => this.onDelete(id,e)}>删除</Link>
        )
      }
    ],
    goods:[]
  }
  componentDidMount = () => {
    axios.get('http://localhost:3008/goods').then(res => {
      console.log(res.data)
      this.setState({
        goods:res.data
      })
    })
  }
  onDelete = (id,e) => {
    console.log(id)
    e.preventDefault();
    axios.delete(`http://localhost:3008/goods/${id}`).then(res => {
      console.log(res.data)
      message.info('删除成功')
      this.setState({
        goods:this.state.goods.filter(t => t.id !== id)
      })
    })

  }
  render() {
    const { goods } = this.state
    return (
      <div className='allpro'>
        <div>共<span>{goods.length}</span>条</div>
        <Table columns={this.state.columns} dataSource={this.state.goods} rowKey={t=>t.id}/>
      </div>
    )
  }
}
export default Allpro
