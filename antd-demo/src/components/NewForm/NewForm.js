import React, { Component } from 'react'
import { Form, Icon, Input, Button,Upload, message} from 'antd';
import styled from 'styled-components'
import axios from 'axios'
import store from '../../redux/store'
const FormItem = Form.Item

const UploadButton = styled(Button)`
  margin-bottom:24px;
`

class NewForm extends Component {
  state = {
    name:'',
    description:'',
    price:'',
    props :
      {
        name: 'file',
        accept:'image/*',
        action: '//localhost:3008/goods',
        headers:
          {
            authorization: 'authorization-text'
          },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        }
      }
    }
  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    let unFilled = Object.keys(data).filter(
      prop => {
        return(!data[prop])
      }
    )
    if(unFilled.length === 0 ){
      const allData = { ...data,
        url:'https://avatars3.githubusercontent.com/u/72467?v=4&s=460'
      }
      axios.post('http://localhost:3008/goods', allData).then(res=>{
        console.log(res.data)
        this.props.history.push('/dashboardd/allpro')
        store.dispatch({type:'UPDATE_SELECTED_KEYS',path:'/dashboardd/allpro'})
        console.log('UPDATE_SELECTED_KEYS 之后', store.getState())
      })
    }else{
      message.error('请填写全部信息');
    }
  }

  hasErrors = (fieldsError) => {
    console.log(fieldsError);
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const config = {
      rules: [{ type: 'string', required: true, message: '必填项目' }],
    }
    return (
      <div className='new-form'>
        <Upload {...this.state.props} >
          <UploadButton>
            <Icon type="upload" /> 上传海报
          </UploadButton>
        </Upload>
        <Form onSubmit={this.handleSubmit} style={{width:'90%'}}>
          <FormItem>
            {getFieldDecorator('name',config)(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />} type='text' placeholder="名称" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('description',config)(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='text' placeholder="描述" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('price',config)(
            <Input
              prefix={<Icon type="pay-circle-o" style={{ fontSize: 13 }} />} type='text' placeholder="价格" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary"  htmlType="submit">
              添加甜品
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default Form.create({})(NewForm)
