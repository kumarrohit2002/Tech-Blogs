import React, { useContext,useEffect } from 'react'
import { AppContext } from '../context/AppContext';
import { Loader } from './Loader';
import ReactDOM from 'react-dom';  

export const Blogs = () => {

  const {posts,loading}=useContext(AppContext);
  console.log("Posts data in Blogs");
  console.log(posts);
 

  return (
    <div className="mt-16 flex flex-col w-2/5 justify-center">
        {
          loading?
            (<Loader/>):
              (
                posts.length===0?
                (<div>
                    <p>No Post</p>
                  </div>):
                (
                                    
                  posts.map((post)=>(
                  <div >
                    <p className='text-xl font-semibold'>{post.title}</p>
                    <p>
                      By <span> {post.author}</span> on <span className='font-semibold'>{post.category}</span>
                    </p>
                    <p>
                      Posted on {post.date}
                    </p>
                    <p>{post.content}</p>
                    <div>
                      {
                        
                      }
                    </div>
                  </div>
                )
              )
            )
          )
        }
    </div>
  )
}

export default Blogs;
