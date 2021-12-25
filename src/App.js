import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import useGetData from './hooks/useGetData';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login'
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OurDoctors from './Pages/OurDoctors/OurDoctors';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PurchaseComplete from './Pages/PurchaseComplete/PurchaseComplete';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';

function App() {
  const { services } = useGetData();
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/ourdoctors">
              <OurDoctors></OurDoctors>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/services/:id">
              <Details services={services}></Details>
            </PrivateRoute>
            <PrivateRoute path="/purchasecomplete">
              <PurchaseComplete></PurchaseComplete>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
