import React from "react";
import {Switch, Route} from "react-router-dom";
import MovieList from "./component/movieListScreen/movieList";
import movieDetail from "./component/movieDetails/movieDetails";

function Router() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movie" component={movieDetail} />
      </Switch>
    </main>
  );
}

export default Router;
