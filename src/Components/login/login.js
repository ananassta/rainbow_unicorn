import React from 'react';
import { Form, Icon, Input, Button, message, Checkbox } from 'antd';

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          message.loading('You are logging in...',2.5)
          .then(()=>{
              message.success('Now you are logged in!', 1.0);
            console.log('Received values of form: ', values);
          })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <article class="mw6 center mt5 tc w-50 bg-white shadow-5 br2 pa3 pa4-ns mw6 ba b--black-10">
      <h1 class="f2">Юридическая клиника СПбГУ </h1>
      <h3 class="f3">Вход</h3>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
          <Button type="primary" htmlType="submit" className="login-form-button">
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Вход &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          </Button>
          {/*Or <a href="">register now!</a>*/}
        </Form.Item>
        <Form.Item>
        <a className="login-form-forgot" href="">
            Забыли пароль?
          </a>
        </Form.Item>
      </Form>
    </article>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login;