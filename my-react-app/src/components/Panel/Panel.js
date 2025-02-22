import React from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import LoadMore from '../LoadMore/LoadMore';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Panel extends React.Component {
    state = {
        news: [],
        page: 1,
        loadingStatus: 'show'
    }
    render() {
        return (
            <div style={{
                paddingBottom: '60px'
            }} className="weui-panel weui-panel_access">
                <div className="weui-panel__bd">
                    {
                        this.state.news.filter((item) => {
                            if (item.title.indexOf(this.props.searchInputText) > -1) {
                                return item
                            }
                        }).map((item, index) => {
                            // Link 声明式导航
                            return (
                                <Link key={index} to={{
                                    pathname: '/detail',
                                    search: `?id=${index}`,
                                    hash: '#the-hash',
                                    state: { fromDashboard: true }
                                }} className="weui-media-box weui-media-box_appmsg">
                                    <div className="weui-media-box__hd">
                                        <img className="weui-media-box__thumb" src={item.author ? item.author.avatar_url : ''} alt="" />
                                    </div>
                                    <div className="weui-media-box__bd">
                                        <h4 className="weui-media-box__title">{item.title}</h4>
                                        <p className="weui-media-box__desc">{item.author ? item.author.loginname : '无名'}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div style={{
                    display: this.state.loadingStatus === 'show' || this.state.news.length >= 30 ? 'none' : 'block'
                }} onClick={
                    this.loadMore.bind(this)
                } className="weui-panel__ft">
                    <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
                <Loading status={this.state.loadingStatus} />
                <LoadMore status={this.state.loadingStatus} limit={this.state.news.length} />
            </div >
        )
    }
    componentWillMount() {
        console.log(this)
        // 页面第一次加载触发的
        this.loadMore();
    }
    async loadMore() {
        this.setState({
            loadingStatus: 'show'
        })
        const news = (await axios.get('https://cnodejs.org/api/v1/topics', {
            params: {
                page: this.state.page,
                limit: 10
            }
        })).data.data
        await new Promise((resolve) => { setTimeout(() => { resolve() }, 1000) })
        console.log(news);
        this.setState({
            page: ++this.state.page,
            news: [...this.state.news, ...news],
            loadingStatus: 'hide'
        })
    }
}
// connect 负责连接redux
// withRouter 负责连接router
export default withRouter(connect((state) => {
    return state
})(Panel))