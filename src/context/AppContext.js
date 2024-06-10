import React, { useState } from 'react'
import { createContext } from 'react'
//step 1
export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const baseUrl="https://codehelp-apis.vercel.app/api/get-blogs";

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data =await result.json();
            console.log("Data is :\n")
            // console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
            setLoading(false);
        }catch(error){
            console.log("Error in fetch Data");
            setPosts([]);
            setTotalPages(null);
            setLoading(false);
            setPage(1);
        }
    }

    function handlePageChange(p){
        setPage(p);
        fetchBlogPosts(p);
    }


    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    // step 2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}


