import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

//components
import { RestrictedRoute } from './Routing/RestrictedRoute';
import { PrivateRoute } from './Routing/PrivateRoute';
import { Layout } from './Layout/Layout';

// import { SigninForm } from './SigninForm/SinginForm';
// import { LoginForm } from './LoginForm/LoginForm';
// import { Phonebook } from './Pages/Phonebook';
// import Home from './Pages/Home';

const SigninForm = lazy(()=> import('./SigninForm/SinginForm'));
const LoginForm = lazy(()=> import('./LoginForm/LoginForm'));
const Phonebook = lazy(()=> import('../components/Pages/Phonebook'));
const Home = lazy(()=> import('../components/Pages/Home'));



export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes >
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>

      <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<SigninForm />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<LoginForm />} />
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      <Route path="*" element={<div>Page not found!!</div>} />  
      </Route>
    </Routes>
  );
};
