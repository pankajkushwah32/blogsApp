import React, { useState, createContext } from "react";
import { baseUrl } from "../baseUrl";

 export   const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  async function fetchBloagPosts(page = 1) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);

      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  }
  



  function handlePageChange(page){
    setPage(page)
    fetchBloagPosts(page)
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBloagPosts,
    handlePageChange
  };
  return <AppContext.Provider value={value}> {children}</AppContext.Provider>;
  
}

