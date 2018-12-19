import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import './feedback.less';


class Feedback extends Component{
  state = {
    alertStatus: false, //弹框状态
    alertTip: '', //弹框提示文字
    content:""
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

  onChange = (e) =>{
      console.log(e.target.value);
      this.setState({
        content:e.target.value
      })

  }

  onClick = ()=>{
    this.setState({
        alertStatus: true, //弹框状态
        alertTip: '提交成功', //弹框提示文字
        content:""
      })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  
  componentDidMount(){
    if(!this.props.proData.dataList.length){
      this.props.getProData();
    }
  }

  render(){
    return (
      <main className="common-con-top">
        <PublicHeader title='首页' confirm />
        <section className="pro-list-con">
          <div className="pro-list-title" >
           请留下您宝贵的意见
          </div>
          <ul className="pro-list-ul">
            <textarea className="feedback-input" value={this.state.content} onChange={this.onChange}/>
            <input className="feedback-sbmit" type="submit" onClick={this.onClick} value="意见反馈"/>
          </ul> 
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
})(Feedback);