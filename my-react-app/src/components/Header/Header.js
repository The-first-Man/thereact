import React from 'react';
import { withRouter } from "react-router-dom";
import './Header.css';
//无状态
// const style = {
//     height: '50px',
//     width: '100%',
//     textAlign: 'center',
//     lineHeight: '50px',
//     color: 'white',
//     backgroundColor: 'red',
//     position: 'fixed',
//     top: '0',
//     zIndex: '3'
// }
class Header extends React.Component {
    // 放在实例上面
    title = 'Yao'
    // setState
    // 唯一有状态的数码
    state = {
        title: '微信'
    }
    // 放在原例上面
    title2() {
        return 'Jing'
    }
    // :style
    render() {
        return (
            <header className="header">
                {
                    this.props.status && this.props.status.back && (
                        <div onClick={
                            this.props.status.fn
                        } className="leftIcon">返回</div>)


                }

                <div className="title">
                    {this.props ? this.props.title : this.state.title}
                </div>

                {this.props.status && this.props.status.template}
            </header>

        )
    }
}
export default withRouter(Header)