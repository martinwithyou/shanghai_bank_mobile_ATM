import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';
import PropTypes from 'prop-types';
import PublicHeader from '@/components/header/header';
import './production.less';


const list = [
  {
    title:"龙井",
    product_name:"龙井",
    introduce:"",
    selectNum:0,
    img:"",
    selectStatus:false

  },
  {
    title:"西湖醋鱼",
    product_name:"西湖醋鱼",
    introduce:" ",
    selectNum:0,
    img:"",
    selectStatus:false

  },
  {
    title:"丝绸",
    product_name:"丝绸",
    introduce:"",
    selectNum:0,
    img:"",
    selectStatus:false

  },
  {
    title:"凉茶",
    product_name:"凉茶",
    introduce:"",
    selectNum:0,
    img:"",
    selectStatus:false

  },
  {
    title:"浙江烧饼",
    product_name:"浙江烧饼",
    introduce:"",
    selectNum:0,
    img:"",
    selectStatus:false

  }
];


class Production extends Component{
  static propTypes = {
    proData: PropTypes.object.isRequired,
    getProData: PropTypes.func.isRequired,
    togSelectPro: PropTypes.func.isRequired,
    editPro: PropTypes.func.isRequired,
  }
  
  /**
   * 添加或删减商品，交由redux进行数据处理，作为全局变量
   * @param  {int} index 编辑的商品索引
   * @param  {int} num   添加||删减的商品数量
   */
  handleEdit = (index, num) => {
    let currentNum = list[index].selectNum + num;
    if(currentNum < 0){
      return
    }
    this.props.editPro(index, currentNum);
  }
  
  // 选择商品，交由redux进行数据处理，作为全局变量
  togSelect = index => {
    this.props.togSelectPro(index);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProps___",nextProps.proData);
    console.log("nextState___",nextState);
    return true
  }
  
  componentDidMount(){
      console.log("view____开始____调取action文件 getProData() ");
      this.props.getProData();
      console.log("view____结束____调取action文件 getProData() ")
      console.log(this.props.proData);
  }

  render(){
    return (
      <main className="common-con-top">
        <PublicHeader title='首页' confirm />
        <section className="pro-list-con">
          <div className="pro-list-title" >
            不可错过的旅游纪念品
          </div>
          {/* <ul className="pro-list-ul">
            {
              list.map((item, index) => {
                return <li className="pro-item" key={index}>
                  <div className="pro-item-select" onClick={this.togSelect.bind(this, index)}>
                    <span className="pro-name">{item.product_name}</span>
                    <span className="introduce-style" >{item.introduce}</span>
                  </div>
                  <div className="pro-item-edit">
                    <span className={`icon-jian ${item.selectNum > 0? 'edit-active':''}`} onClick={this.handleEdit.bind(this, index, -1)}></span>
                    <span className="pro-num">{item.selectNum}</span>
                    <span className={`icon-jia`} onClick={this.handleEdit.bind(this, index, 1)}></span>
                  </div>
                </li>
              })
            }
          </ul>  */}

          <ul className="pro-list-ul">
            {
              this.props.proData.dataList.map((item, index) => {
                return <li className="pro-item" key={index}>
                  <div className="pro-item-select" onClick={this.togSelect.bind(this, index)}>
                    <span className={`icon-xuanze1 pro-select-status ${item.selectStatus? 'pro-selected': ''}`}></span>
                    <span className="pro-name">{item.product_name}</span>
                  </div>
                  <div className="pro-item-edit">
                    <span className={`icon-jian ${item.selectNum > 0? 'edit-active':''}`} onClick={this.handleEdit.bind(this, index, -1)}></span>
                    <span className="pro-num">{item.selectNum}</span>
                    <span className={`icon-jia`} onClick={this.handleEdit.bind(this, index, 1)}></span>
                  </div>
                </li>
              })
            }
          </ul> 

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
})(Production);