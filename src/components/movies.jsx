import { getMovies, deleteMovies } from "../services/movies-services";
import { getGenre } from "../services/genre-service";
import React, { Component } from "react";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";
import MoviesTable from "../components/moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchbox";
import { toast } from "react-toastify";
class Movies extends Component {
  state = {
    movies: [],
    className: "fa fa-heart",
    pageSize: 4,
    currentPage: 1,
    genre: [],
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
    selectedgenre: null
  };
  async componentDidMount() {
    const { data } = await getGenre();
    const genre = [{ _id: "", name: "All Movies" }, ...data];
    const { data: movies } = await getMovies();
    this.setState({ movies, genre });
  }

  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
    //this.setState({ movies }); - can be written as
    try {
      await deleteMovies(movie._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted");

      this.setState({ movies: originalMovies });
    }
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
  handlegenreSelect = genre => {
    this.setState({ selectedgenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  handleSearch = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      selectedgenre: null,
      currentPage: 1
    });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedgenre,
      searchQuery,
      sortColumn
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedgenre && selectedgenre._id) {
      filtered = allMovies.filter(
        movie => movie.genre._id === selectedgenre._id
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
      selectedgenre,
      genre,
      sortColumn,
      searchQuery
    } = this.state;
    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genre}
            onItemSelect={this.handlegenreSelect}
            selectedItem={selectedgenre}
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
