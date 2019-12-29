import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import actions from '../store/actions/user';

class Header extends Component {
    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        const {user,logout} = this.props;
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">用户管理</a>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">首页</Link></li>
                            {!user && <li><Link to="/users/signup">注册</Link></li>}
                            {!user && <li><Link to="/users/signin">登录</Link></li>}
                            {user && <li><Link to="/articles/add">发表文章</Link></li>}
                        </ul>
                        {
                            user && <ul className="nav navbar-nav navbar-right">
                                <li><a>欢迎你:{user.username}</a></li>
                                <li><a onClick={logout}>退出</a></li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(
    state => state.user, actions
)(Header);