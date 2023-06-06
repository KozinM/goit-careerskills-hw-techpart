import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'redux/operations';
import { selectUsers, selectFilteredUsers } from 'redux/selectors';

import { UserCard } from './UserCard/UserCard';
import styles from './UsersList.module.css';

export const UsersList = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error, fetchedData } = useSelector(selectUsers);

 
    // Вызываем операцию
    useEffect(() => {

      if (!fetchedData) {
        dispatch(fetchUsers());
      }
    }, [dispatch, fetchedData]);

 

 const getVisibleUsers = useSelector(selectFilteredUsers);
 //console.log(useSelector(selectFilteredUsers));

  return (
    <div className={styles.userList}>
      {isLoading && <p>Loading tasks...</p>}
      {error && (
        <p>
          <strong>We've got this error: </strong>
          {error}
        </p>
      )}
      {items.length>0 && getVisibleUsers.map(user => (
        <UserCard
          id={user.id}
          username={user.username}
          followersCount={user.followersCount}
          avatar={user.avatar}
          status={user.status}
        />
      ))}
    </div>
  );
};
