import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// import Error404 from './pages/error404';
// import ListProducts from './pages/list-products';
// import ProductDetail from './pages/product-detail';
// import ProtectPage from './pages/protect-page';

import Nav from './components/nav';

import './App.css';

const Error404 = lazy(() => import('./pages/error404'));
const ListProducts = lazy(() => import('./pages/list-products'));
const ProductDetail = lazy(() => import('./pages/product-detail'));
const ProtectPage = lazy(() => import('./pages/protect-page'));

type PrivateRouteProps = {
  component: React.FC;
  path: string;
  exact: boolean;
};

const PrivateRoute = ({ component, path, exact }: PrivateRouteProps) => {
  const auth = false;

  return auth ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <div>You dont have permission</div>
  );
};

function App() {
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={ListProducts} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <PrivateRoute exact path="/profile" component={ProtectPage} />
          <Redirect from="/product" to="/category" />
          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
