import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';
import { Link } from 'react-router-dom';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  console.log(users); //

  const author = users.find((user) => user.id === userId);

  return (
    <span>
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        'Unknown author'
      )}
    </span>
  );
};
export default PostAuthor;
