// Импортируем хук
import { useSelector, useDispatch} from 'react-redux';
import { getUsersFilter } from 'redux/selectors';
import { setUsersFilter } from 'redux/filterSlice';
// Импортируем объект значений фильтра
import { usersFilters } from 'redux/constants';
export const UsersFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const dispatch = useDispatch();

  /* const handleFilterChange = filter => dispatch(setUsersFilter(filter)); */
let filter = useSelector(getUsersFilter);
//console.log(filter);
  const handleSelectChange = event => {
    switch (event.target.selectedIndex) {
      case 0:
        //dispatch(setUsersFilter(usersFilters.all));
        filter = usersFilters.all;
        break;
      case 1:
        //dispatch(setUsersFilter(usersFilters.follow));
        filter = usersFilters.follow;
        break;
      case 2:
        //dispatch(setUsersFilter(usersFilters.followings));
        filter = usersFilters.followings;
        break;
        default:
          throw new Error();
    }
    dispatch(setUsersFilter(filter));
    //console.log(event.target.selectedIndex);
  }


  return (
    <div>
      <select id="users" onChange={handleSelectChange}>
        <option
          selected={filter === usersFilters.all}
          value="all" 
        >
          All
        </option>
        <option
        selected={filter === usersFilters.follow}
          value="follow"
        >
          Follow
        </option>
        <option
        selected={filter === usersFilters.followings}
          value="following"
        >
          Following
        </option>
      </select>
    </div>
  );
};
