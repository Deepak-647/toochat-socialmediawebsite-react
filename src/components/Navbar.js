
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <a href="/">
          <img
            alt=""
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          />
        </a>
      </div>

      <div className={styles.rightNav}>
        <div className={styles.user}>
          <Link to="/settings">
            <img
              src="https://cdn-icons-png.flaticon.com/512/924/924874.png"
              alt=""
              className={styles.userDp}
            />
          </Link>
          <span>Deepak</span>
        </div>

        <div className={styles.navLinks}>
          <ul>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/">Log out</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


//THINGS NEED TO BE CHANGE WHILE USING THE useAuth () hook

// import {useState} from 'react' ;
// import { Link } from 'react-router-dom';

// import styles from '../styles/navbar.module.css';
// import { useAuth } from '../hooks';

// const Navbar = () => {
//   const [results,setResults] =useState([]);
//   const[searchText,setSearchText] = useState('');
//   const auth = useAuth();

//   return (
//     <div className={styles.nav}>
//       <div className={styles.leftDiv}>
//         <Link to="/">
//           <img
//             alt=""
//             src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
//           />
//         </Link>
//       </div>
//     <div className={styles.searchContainer}>
//       <img className={styles.searchIcon} src='' alt='search-icon'/>
//     <input placeholder='Search Users' value={searchText} onChange={(e)=> setSearchText(e.target.value)} />

//     {results.length > 0 && <div className={styles.searchResults}> 
//       <ul>
//         {results.map(user => <li className={styles.searchResultsRow} key ={`user-${user._id}`}>
//           <Link to={`/users/${user._id}`}>
//         <img src='' alt =''/>
//         <span>
//           {user.name}
//         </span>
//           </Link>
//         </li>)}
//       </ul>
//       </div> }
//     </div>

//       <div className={styles.rightNav}>
//         {auth.user && (
//           <div className={styles.user}>
//             <a href="/">
//               <img
//                 src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
//                 alt=""
//                 className={styles.userDp}
//               />
//             </a>
//             <span>{auth.user.name}</span>
//           </div>
//         )}

//         <div className={styles.navLinks}>
//           <ul>
//             {auth.user ? (
//               <>
//                 <li onClick={auth.logout}>Log out</li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login">Log in</Link>
//                 </li>
//                 <li>
//                   <a href="/">Register</a>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
