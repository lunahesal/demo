import React, { Component } from 'react'
import {Route , Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components'
import WillDo from '../WillDo/WillDo'
import NewForm from '../NewForm/NewForm'
import Done from '../Done/Done'
import Allpro from '../Allpro/Allpro'
import NotFound from '../NotFound/NotFound'
import {
  withRouter,
  Switch
} from 'react-router-dom'

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;


const SideTitle = styled.div`
  line-height:64px;
  background-color: #ececec;
  padding-left:24px;
  font-size: 1rem;
  font-weight:700;
  flex-shrink:0;
`
const SideDown = styled.div`
  background-color:#ececec;
  color:#212121;
  font-size:1rem;
  line-height:56px;
  display:flex;
  flex-shrink:0;
`
const Logout = styled.div`
  width:60px;
  cursor:pointer;
  background-color:#ff8a00;
  color:#fff;
  text-align:center;
`
const Admin = styled.div`
  padding-left:8px;
  flex-grow:1px;
`

class Dashboard extends Component {
  state = {
    selectedKeys:this.props.history.location.pathname
  }
  logout = () => {
    window.localStorage.removeItem('userId')
    this.props.history.push('/')
  }
  handleClick = (e) => {
    console.log(e.key)
    this.props.history.push(e.key)
    this.setState({
      selectedKeys:e.key
    })
  }
  render() {
    return (
      <Layout style={{minHeight:'100vh'}}>
          <Sider style={{minHeight:'100vh'}}>
              <SideTitle>吮指后台</SideTitle>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.selectedKeys]}
                defaultOpenKeys={['sub1','sub2']}
                mode="inline"
              >
                <SubMenu key="sub1" title={<span><Icon type="file" /><span>订单管理</span></span>}>
                  <Menu.Item key="/dashboard/willdo">待发货</Menu.Item>
                  <Menu.Item key="/dashboard/done">已完成</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="file" /><span>甜点管理</span></span>}>
                  <Menu.Item key="/dashboard/Allpro">所有甜点</Menu.Item>
                  <Menu.Item key="/dashboard/allpro/newform">新建甜点</Menu.Item>
                </SubMenu>
              </Menu>
              <SideDown>
                <Logout onClick={this.logout}>登出</Logout>
                <Admin>admin</Admin>
              </SideDown>
          </Sider>
        <Layout>
          <Header></Header>
          <Content style={{backgroundColor:'#fff',padding:'24px'}}>
            <Switch>
              <Route  path='/dashboard/willdo' component={WillDo} />
              <Route  path='/dashboard/done' component={Done} />
              <Route  path='/dashboard/allpro/newform' component={NewForm} />
              <Route  path='/dashboard/allpro' component={Allpro} />
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default withRouter(Dashboard)
