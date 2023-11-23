import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLogin from './components/AdminLogin'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/services" component={Services} />
      <ProtectedRoute exact path="/about" component={AboutUs} />
      <ProtectedRoute exact path="/admin" component={AdminLogin} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
