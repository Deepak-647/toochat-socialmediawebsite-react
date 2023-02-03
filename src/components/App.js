import { Routes , Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Home , Login ,Signup,Settings,UserProfile} from '../pages';
import { Loader } from './';
import  Navbar from './Navbar';
import {PrivateRoutes} from '../utils';

const About = () => {
  return <h1>About</h1>;
};

const UserInfo = () => {
  return <h1>User</h1>;
};

const Page404 = () => {
  return <h1>404</h1>;
};


function App() {
  const auth = useAuth();
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader/>;
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home posts={[]} />}/>
          
        

        <Route  path="/login" element={ <Login />}/>

        <Route  path="/register" element={ <Signup />}/>
        <Route  path="/user" element={ <UserProfile />}/>
         {/* WE CAN MAKE THE UserProfile as private like this */}

         {/* <Route  element={<PrivateRoutes/>}>
            <Route element={<UserProfile/>}  path="/user/:userId" exact />
          </Route> */}
        

        <Route  path="/about" element={<About />}/>
        {/* <PrivateRoute  path="/settings" element={<Settings />}/> */}
        <Route  element={<PrivateRoutes/>}>
            <Route element={<Settings/>}  path="/settings" exact />
          </Route>
          
        

        <Route  path="/user/asdasd" element={   <UserInfo />}/>
       
        

        <Route path="*" element={<Page404 />}/>
          
        
      </Routes>
    </div>
  );
}

export default App;
