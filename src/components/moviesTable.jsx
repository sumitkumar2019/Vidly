import React, { Component } from "react";
import Like from "../components/common/like";
import Table from "./common/table";
class MoviesTable extends Component {
  state = {};
  columns = [
    { path: "title", label: "Title" },
    { path: "genere.name", label: "Genere" },
    { path: "numberInStocks", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}
export default MoviesTable;