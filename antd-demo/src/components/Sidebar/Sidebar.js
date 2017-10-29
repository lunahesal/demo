import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import store from '../../redux/store'

const SubMenu = Menu.SubMenu;

const SidebarWrap = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
`
const SideTitle = styled.div`
  line-height:64px;
  background-color: #ececec;
  padding-left:24px;
  font-size: 1rem;
  font-weight:700;
  flex-shrink:0;
`
const Navbar = styled.div`
  flex-grow:1;
  overflow:auto;
`
const LogoutArea = styled.div`
  display:flex;
  background-color:#ececec;
  color:#212121;
  font-size:1rem;
  line-height:56px;
  flex-shrink:0;
`
const LogoutText = styled.div`
  width:60px;
  cursor:pointer;
  background-color:#ff8a00;
  color:#fff;
  text-align:center;
`
const Username = styled.div`
  padding-left:8px;
  flex-grow:1px;
`
class Sidebar extends Component {
  state = {
    selectedKeys:[]
  }
  componentDidMount(){
    console.log(store.getState())
    const path = this.props.history.location.pathname
    store.dispatch({type:'LOAD_SELECTED_KEYS',path})
    this.setState({
      selectedKeys:store.getState().selectedKeys
    })
  }
  handleClick = (e) => {
    console.log(e.key)
    this.props.history.push(e.key)
    const path = e.key
    store.dispatch({ type: 'UPDATE_SELECTED_KEYS',path})
  }
  render() {
    return (
      <SidebarWrap>
        <SideTitle>吮指后台</SideTitle>
        <Navbar>
          <Menu
            onClick={this.handleClick}
            selectedKeys={store.getState().selectedKeys}
            defaultOpenKeys={['sub1','sub2']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="file" /><span>订单管理</span></span>}>
              <Menu.Item key="/dashboardd/willdo">待发货</Menu.Item>
              <Menu.Item key="/dashboardd/done">已完成</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="file" /><span>甜点管理</span></span>}>
              <Menu.Item key="/dashboardd/allpro">所有甜点</Menu.Item>
              <Menu.Item key="/dashboardd/allpro/newform">新建甜点</Menu.Item>
            </SubMenu>
          </Menu>
        </Navbar>
        <LogoutArea>
          <LogoutText onClick={this.props.onLogout}>
            登出
          </LogoutText>
          <Username>
            admin
          </Username>
        </LogoutArea>
      </SidebarWrap>
    )
  }
}
export default withRouter(Sidebar)
