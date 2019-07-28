import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// 配置路由
// Route 嵌套在Router
// Link => router-link
// Router => router-view
// Route => Router父 Router子
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import 'weui';
// import Header from './components/Header/Header';
// import Search from './components/Search/Search';
// import Panel from './components/Panel/Panel';
// 路由组件
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Job from './pages/Job/Job';
import Ask from './pages/Ask/Ask';
import Good from './pages/Good/Good';
import store from './stores/store';
// import Loading from './components/Loading/Loading';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Provider store={store}>
    <Router>
        <Switch>
            <Route path="/detail" component={Detail} />
        </Switch>
        {/*栏目的路由*/}
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/job" component={Job} />
            <Route exact path="/ask" component={Ask} />
            <Route exact path="/good" component={Good} />
        </Switch>
    </Router>
</Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
