/* eslint-disable react/state-in-constructor */
import React, {Component} from "react";

import * as QueryString from "query-string";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  IconButton,
} from "@material-ui/core";

import axios from "axios";

const tableStyle = {
  backgroundColor: " #7373ee",
};
const divStyle = {
  color: "black",
  textAlign: "center",
  backgroundColor: " #5458c7",
  paddingTop: "2px",
  marginTop: "1px",
};

class MovieDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      rows: [],
    };
  }
  handleBack = (props) => {
    const {pathname} = this.props.location;
    if (pathname === "/movie") {
      this.props.history.push("/");
    }
  };

  componentDidMount() {
    const params = QueryString.parse(this.props.location.search);
    axios
      .get("http://www.omdbapi.com/?apikey=b9bd48a6&i=" + params.title)
      .then((response) => {
        // this.rowsCopy = response.data;

        const rows = response.data;

        this.setState({rows});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const {rows} = this.state;

    return (
      <div
        style={{
          borderBottom: "50px",
          borderRight: "50px",
        }}
      >
        <h2 style={divStyle}>movie Detail</h2>
        <Grid container></Grid>
        <Tooltip title="Back" onClick={this.handleBack}>
          <IconButton color="primary" aria-label="" component="span">
            <ArrowBackIcon />
          </IconButton>
        </Tooltip>
        <div
          style={{
            height: "150px",
            overflow: "hidden",
            width: "100%",
            paddingLeft: "35%",
          }}
        >
          <img src={rows.Poster} />
        </div>

        <TableContainer
          style={{
            width: "40%",
            paddingLeft: "30%",
            paddingTop: "2%",
            paddingBottom: "5%",
          }}
        >
          <Table style={{borderStyle: "solid"}}>
            <TableBody>
              <TableRow>
                <TableCell align="middle">Title</TableCell>
                <TableCell align="left">{rows.Title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="middle">Year</TableCell>
                <TableCell align="left">{rows.Year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="middle">Categories</TableCell>
                <TableCell align="left">{rows.Runtime}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="middle">Synopsis</TableCell>
                <TableCell align="left">{rows.Plot}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="middle">Director</TableCell>
                <TableCell align="left">{rows.Director}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="middle">Writer</TableCell>
                <TableCell align="left">{rows.Writer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Actors</TableCell>
                <TableCell align="left">{rows.Actors}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default MovieDetails;
