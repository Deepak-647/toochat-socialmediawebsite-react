import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Comment, Loader ,FriendsList ,CreatePost,Post} from '../components';
import { getPosts } from '../api';
import styles from '../styles/home.module.css';
import { useAuth, usePosts  } from '../hooks';


const Home = () => {
  const auth = useAuth();
  const posts =usePosts();

  if (posts.loading) {
   return <Loader />;
  }
  return (
    <div className={styles.home}>
      
    <div className={styles.postsList}>
    <CreatePost/>
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="user-pic"
            />
            <div>
              <Link
                  to={'/user'}
                  className={styles.postAuthor}
                >
                  Deepak
                </Link>

              {/* <Link
                to={{
                  pathname: `/user/${post.user._id}`,
                  state: {
                    user: post.user,
                  },
                }}
                className={styles.postAuthor}
              >
                {post.user.name}
              </Link> */}
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
    {auth.user && <FriendsList />}
    </div>
  );
};

export default Home;

//THINGS NEED TO BE CHANGED WHILE DISPALYING POSTS FROM API ... For now our Api is not working that's why we commented this

// import { Post, Loader, FriendsList, CreatePost } from '../components';
// import styles from '../styles/home.module.css';
// import { useAuth, usePosts } from '../hooks';

// const Home = () => {
//   const auth = useAuth();
//   const posts = usePosts();

//   if (posts.loading) {
//     return <Loader />;
//   }

//   return (
//     <div className={styles.home}>
//       <div className={styles.postsList}>
//         <CreatePost />
//         {posts.data.map((post) => (
//           <Post post={post} key={`post-${post._id}`} />
//         ))}
//       </div>
//       {auth.user && <FriendsList />}
//     </div>
//   );
// };

// export default Home;

