import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import './openAnAccount.less';

class Introduce extends Component{
  state = {
    alertStatus: false, //弹框状态
    alertTip: '', //弹框提示文字
  }
  static propTypes = {
    proData: PropTypes.object.isRequired,
    getProData: PropTypes.func.isRequired,
    togSelectPro: PropTypes.func.isRequired,
    editPro: PropTypes.func.isRequired,
  }

  /*
  关闭弹框
   */
  closeAlert = () => {
    this.setState({
      alertStatus: false,
      alertTip: '',
    })
  }

  showTip = (item) => {
    console.log(item);
    this.setState({
      alertStatus: true,
      alertTip: "item",
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  
  componentDidMount(){
    if(!this.props.proData.dataList.length){
      //this.props.getProData();
    }
  }

  render(){
    return (
      <main className="common-con-top">
        <PublicHeader title='首页' confirm />
        <section className="pro-list-con">
          <div className="pro-list-title" >
          欢迎您成为上海银行用户
          </div>
          <section className="broke-main-content-balanceQuery">
          <form className="broke-form-balanceQuery">
            <p className="broke-form-lab" >请输入姓名</p>
            <p className="broke-form-input">
              <input type="text" className="input-style" value={this.state.applyNum} />
            </p>
            <p className="broke-form-lab" >请输入性别</p>
            <p className="broke-form-input">
              <input type="text" className="input-style" value={this.state.applyNum} />
            </p>
            <p className="broke-form-lab" >请输入生日</p>
            <p className="broke-form-input">
              <input type="text" className="input-style" value={this.state.applyNum} />
            </p>
            <p className="broke-form-lab" >请输入身份证号</p>
            <p className="broke-form-input">
              <input type="text" className="input-style" value={this.state.applyNum} />
            </p>
            <p className="broke-form-lab" >请输入手机号</p>
            <p className="broke-form-input">
              <input type="text" className="input-style" value={this.state.applyNum} />
            </p>
            <input className="feedback-sbmit" type="submit" value="确认"/>
          </form>
          </section>
          <PublicAlert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus} />  
        </section>
      </main>
    )
  }
}


export default connect(state => ({
  proData: state.proData,
}), {
  getProData, 
  togSelectPro, 
  editPro
})(Introduce);