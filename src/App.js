import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  

  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  );
}

export default App;
