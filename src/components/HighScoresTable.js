import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

export const HighScoresTable = ({ highScores }) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
        <TableHeaderColumn>Steps</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        highScores.map(({ userName, timer, steps }) =>
          <TableRow key={ userName + timer + steps }>
            <TableRowColumn>{ userName }</TableRowColumn>
            <TableRowColumn>{ timer } seconds</TableRowColumn>
            <TableRowColumn>{ steps } steps</TableRowColumn>
          </TableRow>)
      }
    </TableBody>
  </Table>
);
