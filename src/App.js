import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as service from './post';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class App extends Component {  

  constructor(props) {
    super(props);
    // initializes component state
    this.state = {
        users: []
    };
  }  

  fetchPostInfo = async (postId) => {
    const info = await Promise.all([
        service.getUser(postId)
    ]);
    console.log(info);
    let newusers = Object.assign({}, this.state.users, info[0].data);
    console.log(newusers);
    this.setState({
      users: newusers
    });
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  getFullName(item, index) {
    return (
      <TableRow key={index}>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{item.first}</TableRowColumn>
        <TableRowColumn>{item.last}</TableRowColumn>
      </TableRow>
    );
  }

  render() {
    const userdata = this.state.users;
    let userarr = [];
    for (let x in userdata) {
      userarr.push(userdata[x]);
    }
    return (
      <MuiThemeProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userarr.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.first}</TableRowColumn>
                <TableRowColumn>{row.last}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
