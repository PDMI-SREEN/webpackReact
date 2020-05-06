// index.js
import * as React from 'react'
import ReactDOM from 'react-dom'
import Home from "./home"
import 'antd/dist/antd.css';
import './index.less';
import { Provider } from 'react-redux';
import {store} from "./store/index"

ReactDOM.render(
  <Provider store={store}>
      <Home data={[]} number={0} />
  </Provider>,
  document.getElementById('app')
)