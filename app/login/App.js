import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'

class App extends Component {
	render() {
		console.log(this.props)
		return (
			<div id="loginForm" className="form-wrap">
				<div className={'form-group '+this.props.st}>
					<label className="icon-font control-label" htmlFor="loginUserName">&#xe620;</label>
					<input onBlur={this.handerUserName.bind(this)} ref="loginUserName"
						   type="text" className="form-control" id="loginUserName" placeholder="请输入操作员编号"/>
					<div className="form-tip">{this.props.error}</div>
				</div>
				<div className={'form-group '+this.props.st}>
					<label className="icon-font control-label" htmlFor="loginUserPwd">&#xe647;</label>
					<input onBlur={this.handerUserPwd.bind(this)} ref="loginUserPwd"
						   type="password" className="form-control" id="loginUserPwd" maxLength="16"
						   placeholder="请输入密码"/>
					<div className="form-tip">{this.props.error}</div>
				</div>
				<div className="form-group">
					<label className="icon-font control-label" htmlFor="loginUserMsg">&#xe655;</label>
					<input type="text" className="form-control" id="loginUserMsg" maxLength="6" placeholder="请输入验证码"/>
					<a id="checkCode" href="javascript:;" title="获取验证码">获取短信验证码</a>
					<div className="form-tip"></div>
				</div>
				<div className="form-group mt10">
					<button id="loginMsgCode" type="button">登录</button>
					<div className="form-tip"></div>
				</div>
			</div>
		);
	}

	handerUserName() {
		const userNameNode = ReactDOM.findDOMNode(this.refs.loginUserName);
		let userNameValue = userNameNode.value.trim();
		let error = !userNameValue.match(/^([+-]?)\d\.?\d+$/g) ? '编号非法,请输入数字' : '';
		let st = !userNameValue.match(/^([+-]?)\d\.?\d+$/g) ? 'has-error' : 'has-success';
		this.props.changeUseName({
			value: userNameValue,
			error: error,
			st: st
		});
	}

	handerUserPwd() {
		const userNameNode = ReactDOM.findDOMNode(this.refs.loginUserPwd);
		let userNameValue = userNameNode.value.trim();
		let error = !userNameValue.match(/^([+-]?)\d\.?\d+$/g) ? '密码非法,请输入数字' : '';
		let st = !userNameValue.match(/^([+-]?)\d\.?\d+$/g) ? 'has-error' : 'has-success';
		this.props.changeUsePwd({
			value: userNameValue,
			error: error,
			st: st
		});
	}
}

function mapStateToProps(state) {
	return {
		value: state.value,
		error: state.error,
		st: state.st
	}
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps, action)(App);