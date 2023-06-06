/* import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations'; */
import { UsersFilter } from "./UsersFilter/UsersFilter";
import { UsersList } from "./UsersList/UsersList";
import { users } from './Data/UserData';



//components
/* import { RestrictedRoute } from './Routing/RestrictedRoute';
import { PrivateRoute } from './Routing/PrivateRoute';
import { Layout } from './Layout/Layout'; */

/* const SigninForm = lazy(()=> import('./SigninForm/SinginForm'));
const LoginForm = lazy(()=> import('./LoginForm/LoginForm'));
const Phonebook = lazy(()=> import('../components/Pages/Phonebook'));
const Home = lazy(()=> import('../components/Pages/Home')); */



export const App = () => {
  
 return (
<> 
<UsersFilter/>
<UsersList usersPerPage={3} users={users}/>
</>
 )
};

/* export const App = () => {

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
 */