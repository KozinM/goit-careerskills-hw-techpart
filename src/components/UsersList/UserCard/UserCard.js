import style from './UserCard.module.css';
import logo from './logo.svg';
import pictureQuestion from './pictureQuestion.png';
import { userFollowToggle } from 'redux/usersSlice';
import { useDispatch } from 'react-redux';

export const UserCard = ({ id, username, followers, avatar, status }) => {

  const dispatch = useDispatch();

const handleFollowClick = (event) => {
   event.currentTarget.classList.toggle("following");
  dispatch(userFollowToggle(event.currentTarget.id));
}

  return (
    <div className={style.userCard}>
      <img className={style.logoImg} src={logo} alt="Logotype of Go-IT School" />
      <img className={style.questionImg} src={pictureQuestion}
        alt="a question and an answer"
        width="308px" />
      <div className={style.userAvatar}>
        <img src={avatar} alt="User Avatar" />
      </div>
      <span className={style.avatarLine}></span>
      <h3 className={style.username}>{username}</h3>
      <p className={style.followersCount}>{new Intl.NumberFormat('en-US').format(followers)} followers</p>
      <button id={id} className={style.followButton} onClick={handleFollowClick}>
        {status==="follow" ? 'Follow': 'Following'}
      </button>
    </div>
  );
};

