import React, { Component } from 'react';

import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <List lists={lists}/>
        <Footer />
      </div>
    );
  }
}

const lists = [
    {name:'表单', icon: require('./assets/images/icon_nav_form.png')},
    {name:'基础组件', icon: require('./assets/images/icon_nav_layout.png')},
    {name:'操作反馈', icon: require('./assets/images/icon_nav_feedback.png')},
    {name:'导航相关', icon: require('./assets/images/icon_nav_nav.png')},
    {name:'搜索相关', icon: require('./assets/images/icon_nav_search.png')}
];

export default App;
