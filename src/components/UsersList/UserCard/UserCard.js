import style from './UserCard.module.css';
import logo from './logo.svg';
import pictureQuestion from './pictureQuestion.png';
import { userFollowToggle } from 'redux/usersSlice';
import { useDispatch } from 'react-redux';

export const UserCard = ({ id, tweets, followers, avatar, status }) => {

  const dispatch = useDispatch();

const handleFollowClick = (event) => {
   event.currentTarget.classList.toggle("followingButton");
  dispatch(userFollowToggle(event.currentTarget.id));
}

  return (
    <div className={style.userCard}>
      <img className={style.logoImg} src={logo} alt="Logotype of Go-IT School" />
      <img className={style.questionImg} src={pictureQuestion}
        alt="a question and an answer"
         />
      <div className={style.userAvatar}>
        <img src={avatar} alt="User Avatar" />
      </div>
      <span className={style.avatarLine}></span>
      <span className={style.tweets}>{new Intl.NumberFormat('en-US').format(tweets)} tweets</span>
      <span className={style.followersCount}>{new Intl.NumberFormat('en-US').format(followers)} followers</span>
      <button id={id} className={status==="follow"? style.followButton : style.followingButton} onClick={handleFollowClick}>
        {status==="follow" ? 'Follow': 'Following'}
      </button>
    </div>
  );
};

