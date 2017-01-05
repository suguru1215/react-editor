import React from 'react';
import { render } from 'react-dom';

import App from './views/App.jsx';
import Form from './views/form/index.jsx';

// STYLES
import styles from './style/app.min.css';

render(
  <App />,
  document.getElementById('app')
)
