import { useGetAnimalsQuery } from '../../redux/rtkSlice';

const PostsList = () => {
      const { data: animals, isLoading, error } = useGetAnimalsQuery();

      if (isLoading) return <p>Loading...</p>;
      if (error) return <p>Error loading posts!</p>;

      return (
            <ul>
                  {animals.map((post) => (
                        <li key={post.id}>{post.name}</li>
                  ))}
            </ul>
      );
};

export default PostsList;
