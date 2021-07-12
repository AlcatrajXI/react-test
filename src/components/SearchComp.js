import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

export default class SearchComp extends Component {

    constructor(props) {
        super(props);

        this.searchSubmit = this.searchSubmit.bind(this);
    }


    searchSubmit(query) {
        this.props.onSearch(query, 1);
    }

    render() {
        return (
            <Search
                placeholder="Search users"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={this.searchSubmit}
            />
        )
    }
}
