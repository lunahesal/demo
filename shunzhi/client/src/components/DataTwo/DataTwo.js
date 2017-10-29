import React, { Component } from 'react'
import './data-two.css'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

class DataTwo extends Component {
  render() {
    let maxWidth=window.innerWidth - 40
    const data = [
      {name: '3 月', amount: 70, pv: 2400, amt: 2400},
      {name: '4 月', amount: 100, pv: 1398, amt: 2210},
      {name: '5 月', amount: 300, pv: 9800, amt: 2290},
      {name: '5 月', amount: 200, pv: 3908, amt: 2000},
      {name: '7 月', amount: 278, pv: 4800, amt: 2181}
];
    return (
      <div className='data-two'>
        <AreaChart width={maxWidth} height={200} data={data}
          margin={{top: 10, right: 10, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone'  dataKey='amount'
            stroke='none' fill='rgb(145, 225, 221)' fillOpacity='0.6'
            activeDot={{ stroke: 'rgb(145, 225, 221)', strokeWidth: 2 }}

            />
        </AreaChart>
      </div>
    )
  }
}
export default DataTwo
