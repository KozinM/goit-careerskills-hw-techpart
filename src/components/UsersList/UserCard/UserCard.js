import style from './UserCard.module.css';
import { userFollowToggle } from 'redux/usersSlice';
import { useDispatch } from 'react-redux';

export const UserCard = ({ id, username, followersCount, avatar, status }) => {


/*   const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    setUpdatedFollowersCount(isFollowing ? updatedFollowersCount - 1 : updatedFollowersCount + 1);
  }; */

  const dispatch = useDispatch();

const handleFollowClick = (event) => {
   event.currentTarget.classList.toggle("following");
  dispatch(userFollowToggle(event.currentTarget.id));
}

  return (
    <div className={style.userCard}>
      <div className={style.userAvatar}>
        <img src={avatar} alt="User Avatar" />
      </div>
      <h3 className={style.username}>{username}</h3>
      <p className={style.followersCount}>{followersCount} followers</p>
      <button id={id} className={style.followButton} onClick={handleFollowClick}>
        {status==="follow" ? 'Follow': 'Following'}
      </button>
    </div>
  );
};

