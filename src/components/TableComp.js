import React from 'react';
import { Table } from 'antd';
import { Columns } from '../App.data.js';

const TableComp = React.memo(props => {
    let pagination = { pageSize: props.pageSize, total: props.tableData.total_count};

    return (
        <Table columns={Columns} onChange={props.onTableChange} dataSource={props.tableData?.items ?? []} rowKey={"id"} pagination={pagination} />
    );
});

export default TableComp;
