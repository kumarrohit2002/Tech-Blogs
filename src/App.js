import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import {AppContext} from "./context/AppContext"

function App() {

  const {fetchBlogPosts,page}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts(page);
  },[]);

  return (
    <div className="flex flex-col items-center">
      <Header/>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
