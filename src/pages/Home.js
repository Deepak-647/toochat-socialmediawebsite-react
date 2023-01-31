import { useEffect, useState } from 'react';

import { Comment, Loader } from '../components';
import { getPosts } from '../api';
import styles from '../styles/home.module.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();

      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.postsList}>
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="user-pic"
            />
            <div>
              <span className={styles.postAuthor}>Deepak</span>
              <span className={styles.postTime}>a minute ago</span>
            </div>
          </div>
          <div className={styles.postContent}>Post Conetnt</div>

          <div className={styles.postActions}>
            <div className={styles.postLike}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/739/739231.png"
                alt="likes-icon"
              />
              <span>5</span>
            </div>

            <div className={styles.postCommentsIcon}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3416/3416046.png"
                alt="comments-icon"
              />
              <span>2</span>
            </div>
          </div>
          <div className={styles.postCommentBox}>
            <input placeholder="Start typing a comment ..." />
          </div>

          <div className={styles.postCommentsList}>
            <div className={styles.postCommentsItem}>
              <div className={styles.postCommentHeader}>
                <span className={styles.postCommentAuthor}>Bill</span>
                <span className={styles.postCommentTime}>a minute ago</span>
                <span className={styles.postCommentLikes}>22</span>
              </div>

              <div className={styles.postCommentContent}>Random comment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//THINGS NEED TO BE CHANGED WHILE DISPALYING POSTS FROM API ... For now our Api is not working that's why we commented this

// import styles from '../styles/home.module.css';
// import PropTypes from 'prop-types';
// import { Comment } from '../components';

// const Home = ({ posts }) => {
//   return (
//     <div className={styles.postsList}>
//       {posts.map((post) => (
//         <div className={styles.postWrapper} key={`post-${post._id}`}>
//           <div className={styles.postHeader}>
//             <div className={styles.postAvatar}>
//               <img
//                 src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
//                 alt="user-pic"
//               />
//               <div>
//                 <span className={styles.postAuthor}>{post.user.name}</span>
//                 <span className={styles.postTime}>a minute ago</span>
//               </div>
//             </div>
//             <div className={styles.postContent}>{post.conent}</div>

//             <div className={styles.postActions}>
//               <div className={styles.postLike}>
//                 <img
//                   src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
//                   alt="likes-icon"
//                 />
//                 <span>5</span>
//               </div>

//               <div className={styles.postCommentsIcon}>
//                 <img
//                   src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
//                   alt="comments-icon"
//                 />
//                 <span>2</span>
//               </div>
//             </div>
//             <div className={styles.postCommentBox}>
//               <input placeholder="Start typing a comment" />
//             </div>

//             <div className={styles.postCommentsList}>
//                    {post.comments.map((comment) => (
//                     <Comment comment={comment} />
//                     ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// Home.propTypes = {
//   posts: PropTypes.array.isRequired,
// };
// export default Home;
