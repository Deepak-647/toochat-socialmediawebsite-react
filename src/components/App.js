import { Routes , Route } from 'react-router-dom';
import { useAuth } from '../hooks';
import { Home , Login ,Signup} from '../pages';
import { Loader } from './';
import  Navbar from './Navbar';

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
         
        

        <Route  path="/about" element={<About />}/>
          
        

        <Route  path="/user/asdasd" element={   <UserInfo />}/>
       
        

        <Route path="*" element={<Page404 />}/>
          
        
      </Routes>
    </div>
  );
}

export default App;
