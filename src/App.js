import './App.css';
import React from 'react';
import { Card } from 'antd';
import { GitApi } from './App.data.js';
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
    this.getUsers = this.getUsers.bind(this);
    this.handleTableChange = this.handleTableChange.bind(this);
  }

  getUsers(query, page, pageSize = this.state.pageSize) {
    this.setState({ query, page, pageSize });
    if (query.trim()) {
      fetch(`${GitApi.getUsers}?per_page=${pageSize}&page=${page}&q=${query}`)
        .then((response) => response.json())
        .then((res) => {
          if (res.items) {
            this.setState({ tableData: res });
          } else {
            this.setState({ tableData: undefined });
          }
        })
        .catch((error) => {
          this.setState({ tableData: undefined });
        });
    } else {
      this.setState({ tableData: undefined });
    }
  }

  handleSearch(data) {
    this.setState({ tableData: data });
  }

  handleTableChange(data) {
    this.getUsers(this.state.query, data.current, data.pageSize)
  }

  render() {
    return (
      <div className="container">
        <Card className="card">
          <SearchComp onSearch={this.getUsers} />
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
