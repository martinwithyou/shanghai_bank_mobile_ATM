import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicHeader from '@/components/header/header';
import PublicAlert from '@/components/alert/alert';
import './introduce.less';


const list = [
  {
    title:"雷峰塔",
    product_name:"雷峰塔",
    introduce:"这里是杭州的雷峰塔，杭州欢迎您",
    selectNum:0,
    img:"",
    selectStatus:true,
    style:"bg-c"

  },
  {
    title:"亚运会场",
    product_name:"亚运会场",
    introduce:"这里是杭州的亚运会场，杭州欢迎您",
    selectNum:0,
    img:"",
    selectStatus:true,
    style:"bg-e"

  },
  {
    title:"之江大桥",
    product_name:"之江大桥",
    introduce:"这里是杭州的之江大桥，杭州欢迎您",
    selectNum:0,
    img:"",
    selectStatus:true,
    style:"bg-d"

  },
  {
    title:"西湖",
    product_name:"西湖",
    introduce:"这里是杭州的西湖，杭州欢迎您",
    selectNum:0,
    img:"",
    selectStatus:true,
    style:"bg-a"

  }
];


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
            杭州旅游介绍
          </div>
          <ul className="pro-list-ul">
            {
              list.map((item, index) => {
                return <li className="pro-item" key={index} >
                  <div className="pro-item-select" >
                    <span className={`icon-xuanze1 pro-select-status ${item.selectStatus? 'pro-selected': ''}`}></span>
                    <span className="pro-name">{item.product_name}</span>
                    {/* <span className="introduce-style" >{item.introduce}</span> */}
                  </div>
                  <div className="pic-style" className={item.style} onClick={()=>{
                  this.setState({
                    alertStatus: true,
                    alertTip: item.introduce,
                  })
                }}></div>
                </li>
              })
            }
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
})(Introduce);