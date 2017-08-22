import React, { Component } from 'react';

import Header from './components/Header/Header';
import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <List lists={lists}/>
      </div>
    );
  }
}

const lists = [
    {name:'表单', icon: './assets/images/icon_nav_form.png'},
    {name:'基础组件', icon: './assets/images/icon_nav_form.png'},
    {name:'操作反馈', icon: './assets/images/icon_nav_form.png'},
    {name:'导航相关', icon: './assets/images/icon_nav_form.png'},
    {name:'搜索相关', icon: './assets/images/icon_nav_form.png'}
];

export default App;
