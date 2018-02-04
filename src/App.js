import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { onLoad } from './actions/userAction';
import { OnAddUser, OnUpdateUser, deleteUser, OnSearchUser, OnRefreshUser } from './actions/userAction';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/home/home';
import { Layout } from './components/layout/Layout'

class App extends Component {
    componentWillMount() {
        debugger
        this.props.onLoad();
    }
    render() {
        return (
            <div>                 
                <BrowserRouter>
                    <div>
                        <Layout />
                        <Route exact path="/"
                            render={(props) => <Home {...props} data={this.props.data} onDelete={this.props.delete} onAdd={this.props.add}></Home>} />
                        {/* <Route path="/TodoList"
                            render={(props) => <TodoList onDelete={this.props.delete}  onUpdate={this.props.update} onSearch={this.props.Search} data={this.props.data} FilterList={this.props.FilterList} OnRefresh={this.props.Refresh}></TodoList>} /> */}
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
function mapStateToProps(store, ownProps) {
    return {
        data: store.data,
        FilterList: store.FilterList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => dispatch(deleteUser(id)),
        onLoad: () => dispatch(onLoad()),
        add: (user) => dispatch(OnAddUser(user)),
        update: (user) => dispatch(OnUpdateUser(user)),
        Search: (value) => dispatch(OnSearchUser(value)),
        Refresh: () => dispatch(OnRefreshUser())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);