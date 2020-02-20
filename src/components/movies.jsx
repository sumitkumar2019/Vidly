import { getMovies } from "../services/movies-services";
import { getGenere } from "../services/genre-service";
import React, { Component } from "react";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    className: "fa fa-heart",
    pageSize: 4,
    currentPage: 1,
    genere: [],
    sortColumn: { path: "title", order: "asc" }
  };
  componentDidMount() {
    const genere = [{ _id: "", name: "All Movies" }, ...getGenere()];
    this.setState({ movies: getMovies(), genere: genere });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
    //this.setState({ movies }); - can be written as
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenereSelect = genere => {
    this.setState({ selectedGenere: genere, currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenere,
      sortColumn
    } = this.state;
    const filtered =
      selectedGenere && selectedGenere._id
        ? allMovies.filter(movie => movie.genere._id === selectedGenere._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const {
      pageSize,
      currentPage,
      selectedGenere,
      genere,
      sortColumn
    } = this.state;
    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genere}
            onItemSelect={this.handleGenereSelect}
            selectedItem={selectedGenere}
          />
        </div>
        <div className="col">
          <h2>Movies List</h2>
          <p>There are {totalCount} movies currently in the Database</p>
          <MoviesTable
            movies={data}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default Movies;
