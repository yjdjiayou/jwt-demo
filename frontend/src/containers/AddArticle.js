import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions/article';

class AddArticle extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let title = this.title.value;
        let content = this.content.value;
        let article = {title, content};
        this.props.addArticle(article);
    };

    render() {
        const {error} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">标题</label>
                    <input className="form-control" ref={input => this.title = input}/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <input className="form-control" ref={input => this.content = input}/>
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit"/>
                </div>
                {
                    error && <div className="form-group">
                        <div className="alert alert-danger">
                            {error.toString()}
                        </div>
                    </div>
                }
            </form>
        )
    }
}

export default connect(
    state => state.article,
    actions
)(AddArticle);