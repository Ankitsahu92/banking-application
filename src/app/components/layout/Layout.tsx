import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: any;
};

type State = {};

class Layout extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </>
    );
  }
}

export default Layout;
