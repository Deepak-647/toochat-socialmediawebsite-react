const Home = () => {
  return (
    <div className="posts-list">
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-avatar">
            <img src="" alt="user-pic" />
            <div>
              <span className="post-author">Deepak </span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">Post Content</div>
          <div className="post-actions">
            <div className="post-like">
              <img src=" " alt="likes-icon" />
              <span>5</span>
            </div>
            <div className="post-comments-icon">
              <img src="" alt="comments-icon" />
              <span>2</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input placeholder="Start typing a comment .."/>
          </div>
          <div className="post-comments-list">
            <div className="post-commnets-item">
              <div className="post-comments-header">
                <span className="post-comment-author">Duke </span>
                <span className="post-comment-time">a minute ago</span>
                <span className="post-comment-likes">22</span>
              </div>
              <div className="post-comment-content">Random Comment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
