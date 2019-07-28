import React, { Component } from 'react'
import Header from '../../components/Header/Header';
// import Search from '../../components/Search/Search';
// import Panel from '../../components/Panel/Panel';
import Tabbar from '../../components/Tabbar/Tabbar';
export default class Good extends Component {
    render() {
        return (
            <div>
                <Header title="点赞" />
                {/* <Search />
                <Panel /> */}
                <Tabbar tab={3} />
            </div>
        )
    }
}