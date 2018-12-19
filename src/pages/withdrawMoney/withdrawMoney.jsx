import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import './withdrawMoney.less';

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

   // 初始化数据
   initData = async () => {
    try{
    //   let result = await API.getBalance();
    //   console.log(result);
    //   this.setState({balance: result});
    }catch(err){
      console.error(err);
    }
  }
  
  /**
   * 格式化输入数据
   * 格式为微信红包格式：最大 200.00
   * @param  {object} event 事件对象
   */
  handleInput = event => {
    let value = event.target.value;
    if((/^\d*?\.?\d{0,2}?$/gi).test(value)){
      if((/^0+[1-9]+/).test(value)) {
        value = value.replace(/^0+/,'');
      }
      if((/^0{2}\./).test(value)) {
        value = value.replace(/^0+/,'0');
      }
      value = value.replace(/^\./gi,'0.');
      if(parseFloat(value) > 200){
        value = '200.00';
      }
      this.setState({applyNum: value});
    }
  }
  
  /**
   * 提交判断条件
   */
  sumitForm = () => {
    let alertTip;
    if(!this.state.applyNum){
      alertTip = '请输入提现金额';
    }else if(parseFloat(this.state.applyNum) > this.state.balance.balance){
      alertTip = '申请提现金额不能大于余额';
    }else{
      alertTip = '申请提现成功';
    }

    this.setState({
      alertStatus: true,
      alertTip,
      applyNum: '',
    })
  }
  
  /*
  关闭弹框
   */
  closeAlert = () => {
    this.setState({
      alertStatus: false,
      alertTip: '',
      balance:100
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
          上海银行,用户取钱页面
          </div>
          <section className="broke-main-content">
          <form className="broke-form">
            <p>请输入取出金额（元）</p>
            <p>¥ <input type="text" value={this.state.applyNum} placeholder="0.00" onChange={this.handleInput} maxLength="5" /></p>
            <input className="feedback-sbmit" type="submit" onClick={this.sumitForm} value="提交"/>
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