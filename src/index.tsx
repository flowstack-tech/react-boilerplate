import React from "react";

import ReactDOM from "react-dom";

import App from "@src/application";

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root"),
);

if (process.env.NODE_ENV === "development") {
  module.hot?.accept();
}
