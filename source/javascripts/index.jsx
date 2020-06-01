import React from "react";
import ReactDOM from "react-dom";
import 'mobx-react/batchingForReactDom';

import { Cards } from './components/cards'

ReactDOM.render(
  <Cards />,
  document.querySelector("main")
);
