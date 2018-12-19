import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

import home from "@/pages/home/home";
const record = asyncComponent(() => import("@/pages/record/record"));
const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
const production = asyncComponent(() => import("@/pages/production/production"));
const introduce = asyncComponent(() => import("@/pages/introduce/introduce"));
const feedback = asyncComponent(() => import("@/pages/feedback/feedback"));
const balance = asyncComponent(() => import("@/pages/balance/balance"));
const openAnAccount = asyncComponent(() => import("@/pages/openAnAccount/openAnAccount"));
const saveMoney = asyncComponent(() => import("@/pages/saveMoney/saveMoney"));
const withdrawMoney = asyncComponent(() => import("@/pages/withdrawMoney/withdrawMoney"));
const balanceQuery = asyncComponent(() => import("@/pages/balanceQuery/balanceQuery"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={openAnAccount} />
          <Route path="/record" component={record} />
          <Route path="/helpcenter" component={helpcenter} />
          <Route path="/production" component={production} />
          <Route path="/introduce" component={introduce} />
          <Route path="/feedback" component={feedback} />
          <Route path="/balance" component={balance} />
          <Route path="/home" component={home} />
          <Route path="/openAnAccount" component={openAnAccount} />
          <Route path="/saveMoney" component={saveMoney} />
          <Route path="/withdrawMoney" component={withdrawMoney} />
          <Route path="/balanceQuery" component={balanceQuery} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
