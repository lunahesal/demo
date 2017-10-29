import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import WillDo from '../WillDo/WillDo'
import NewForm from '../NewForm/NewForm'
import Done from '../Done/Done'
import Allpro from '../Allpro/Allpro'
import NotFound from '../NotFound/NotFound'
import {
  withRouter,
  Route,
  Switch
} from 'react-router-dom'

const DashboardWrap = styled.div`
  display:flex;
  height:100vh;
`
const SideWrap = styled.div`
  width:200px;
`
const MainWrap = styled.div`
  flex-grow:1;
`
const TopHeader = styled.div`
  width:100%;
  height:64px;
  background-color:#404040;
`
const MainContent = styled.div`
  padding:24px
`

class Dashboardd extends Component {
  logout = () => {
    window.localStorage.removeItem('userId')
    this.props.history.push('/')
  }
  render() {
    return (
      <DashboardWrap>
        <SideWrap>
          <Sidebar onLogout={this.logout}/>
        </SideWrap>
        <MainWrap>
          <TopHeader />
          <MainContent>
            <Switch>
              <Route  path='/dashboardd/willdo' component={WillDo} />
              <Route  path='/dashboardd/done' component={Done} />
              <Route  path='/dashboardd/allpro/newform' component={NewForm} />
              <Route  path='/dashboardd/allpro' component={Allpro} />
              <Route component={NotFound} />
            </Switch>
          </MainContent>
        </MainWrap>

      </DashboardWrap>
    )
  }
}
export default withRouter(Dashboardd)
