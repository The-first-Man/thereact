import React, { Component } from 'react'
import Header from '../../components/Header/Header';
// import Search from '../../components/Search/Search';
// import Panel from '../../components/Panel/Panel';
import Tabbar from '../../components/Tabbar/Tabbar';
export default class Job extends Component {
    render() {
        return (
            <div>
                <Header title="求职" />
                {/* <Search />
                <Panel /> */}
                <Tabbar tab={2} />
            </div>
        )
    }
}