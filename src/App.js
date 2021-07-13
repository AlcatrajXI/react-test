import './App.css';
import React from 'react';
import { Card } from 'antd';
import SearchComp from './components/SearchComp';
import TableComp from './components/TableComp';

class MainComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableData: {
        items: [],
        total_count: 0
      },
      page: 1,
      pageSize: 9,
      query: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
  }

  handleSearch(data) {
    this.setState({ tableData: data.tableData, page: data.page, pageSize: data.pageSize, query: data.query });
  }

  handleTableChange(data) {
    this.setState({ page: data.current, pageSize: data.pageSize });
  }

  render() {
    return (
      <div className="container">
        <Card className="card">
          <SearchComp onSearch={this.handleSearch} page={this.state.page} pageSize={this.state.pageSize} />
          <TableComp onTableChange={this.handleTableChange} pageSize={this.state.pageSize} tableData={this.state.tableData} />
        </Card>
      </div>
    )
  }
}

function App() {
  return (
    <MainComp />
  );
}

export default App;
