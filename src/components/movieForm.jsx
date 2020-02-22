import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenere } from "../services/genre-service";
import { getMovieById, saveMovie } from "../services/movies-services";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStocks: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStocks: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate")
  };

  componentDidMount() {
    const genres = getGenere();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovieById(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genere._id,
      numberInStocks: movie.numberInStocks,
      dailyRentalRate: movie.dailyRentalRate
    };
  }
  doSubmit = () => {
    console.log("call server for data submission");
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    //const { match, history } = this.props;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genere", this.state.genres)}
          {this.renderInput("numberInStocks", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
