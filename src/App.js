import './App.css';
import { GitApi, Columns } from './App.data.js';
import React from 'react';
import { Card, Table, Input } from 'antd';

const { Search } = Input;

class MainComp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableData: []
    };

    this.searchSubmit = this.searchSubmit.bind(this);
  }


  searchSubmit(query) {

    if (query.trim()) {
      fetch(`${GitApi.getUsers}?q=${query}`)
        .then((response) => response.json())
        .then((res) => {
          if (res.items) {
            this.setState({ tableData: res.items });
          } else {
            alert(res.message);
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      this.setState({ tableData: [] });
    }
  }

  render() {
    return (
      <div className="container">
        <Card className="card">
          <Search
            placeholder="Search users"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={this.searchSubmit}
          />
          <Table columns={Columns} dataSource={this.state.tableData} rowKey={"id"} pagination={{ defaultPageSize: 9 }} />
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
