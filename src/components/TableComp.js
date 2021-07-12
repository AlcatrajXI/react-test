import { Columns } from '../App.data.js';
import React, { Component } from 'react';
import { Table, Input } from 'antd';

export default class TableComp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tableData: []
        };
    }
    handleTableChange(e) {
        this.props.onTableChange(e);
    }

    render() {
        let pagination = { pageSize: this.props.pageSize, total: this.props.tableData?.total_count ?? 0};
        return (
            <Table columns={Columns} onChange={this.props.onTableChange} dataSource={this.props.tableData?.items ?? []} rowKey={"id"} pagination={pagination} />
        )
    }
}
