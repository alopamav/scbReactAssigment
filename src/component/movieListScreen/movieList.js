/* eslint-disable react/state-in-constructor */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@material-ui/core";

import SearchBox from "./SearchBox";
import axios from "axios";
import {AutoSizer} from "react-virtualized";

const divStyle = {
  color: "black",
  textAlign: "center",
  backgroundColor: " #5458c7",
  paddingTop: "2px",
  marginTop: "1px",
};
const tableStyle = {
  backgroundColor: " #7373ee",
};

class MovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      searchQuery: "",
      rows: [],
    };
  }

  handleSearchQuery = (data) => {
    this.setState({searchQuery: data});
    this.urlmovie(data);
  };

  componentDidMount() {}

  urlmovie = (data) => {
    axios
      .get("http://www.omdbapi.com/?apikey=b9bd48a6&type=movie&S=" + data)
      .then((response) => {
        if (response.data.Response != "False") {
          const rows = response.data.Search;

          this.setState({rows});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {searchQuery, rows} = this.state;
    return (
      <div className="movieList">
        <h2 style={divStyle}>Movie List</h2>
        <Grid container>
          <SearchBox
            searchQuery={searchQuery}
            onChange={this.handleSearchQuery}
            placeholder="Search Movie"
          />
        </Grid>
        <TableContainer
          style={{backgroundColor: "#eeeeee", fontWeight: "bold"}}
        >
          <Table>
            <TableHead style={tableStyle}>
              <TableRow>
                <TableCell align="middle">Title</TableCell>
                <TableCell align="middle">Type</TableCell>
                <TableCell align="middle">Year</TableCell>
                <TableCell align="center">Poster</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((item) => (
                <TableRow key={item.imdbID}>
                  <Link to={`/movie?title=${item.imdbID}`}>
                    <TableCell align="middle" style={{fontWeight: "900"}}>
                      {item.Title}
                    </TableCell>
                  </Link>

                  <TableCell align="middle">{item.Type}</TableCell>
                  <TableCell align="middle">{item.Year}</TableCell>
                  <TableCell align="right">
                    <div
                      style={{
                        width: "300px",
                        height: "150px",
                        overflow: "hidden",
                      }}
                    >
                      <img src={item.Poster} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default MovieList;
