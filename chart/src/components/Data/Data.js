import React, { Component } from 'react'
import './data.css'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'
class Data extends Component {
  state = {
    data : [
      {name: '水分', value: 200, clicked:false},
      {name: '糖分', value: 100, clicked:false},
      {name: '蛋白质', value: 100, clicked:false},
      {name: '脂肪', value: 130, clicked:false}
    ],
    color :['pink', '#d7ccc8', '#80deea', '#e1bee7']

  }

    handleClick = (list,color) => {
    const { data } = this.state
    const newData = data.map(t=>{
      if(t.name === list.name){
        return {...t, clicked:true}
      }
      return t
    })
    this.setState({
      data:newData
    })
    if(list.clicked === false){
      const newList = data.find(t => t.name === list.name )
      this.props.addToList(newList,color)
    }
  }


  render() {
    const { data , color } = this.state
    return (
      <div className='data'>
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey='value' cx='50%' cy='50%' innerRadius={30} outerRadius={60} fill="#82ca9d">
            {
              data.map((t, index) =>(
                <Cell key={index} fill={color[index]}
                onClick={() => this.handleClick(t,color[index])}
                />
              ))
            }
          </Pie>
          <Tooltip/>
        </PieChart>
      </div>
    )
  }
}
export default Data
