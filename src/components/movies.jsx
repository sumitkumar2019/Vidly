import { getMovies } from "../services/movies-services";
import { getGenere } from "../services/genre-service";
import React, { Component } from "react";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchbox";
class Movies extends Component {
  state = {
    movies: [],
    className: "fa fa-heart",
    pageSize: 4,
    currentPage: 1,
    genere: [],
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
    selectedGenere: null
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
    this.setState({ selectedGenere: genere, searchQuery: "", currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  handleSearch = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      selectedGenere: null,
      currentPage: 1
    });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenere,
      searchQuery,
      sortColumn
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenere && selectedGenere._id) {
      filtered = allMovies.filter(
        movie => movie.genere._id === selectedGenere._id
      );
    }
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
      sortColumn,
      searchQuery
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
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <p>There are {totalCount} movies currently in the Database</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
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
