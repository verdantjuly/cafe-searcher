import { createContext, useState } from "react";
import "./CafeSearcher.css";
import PostList from "./PostList";

import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Header from "./Header";
import Footer from "./Footer";

export const PostContext = createContext();
export const PostListContext = createContext();
export const PageContext = createContext();
export const MetaContext = createContext();

export default function CafeSearcher() {
  const [post, setPost] = useState(null);
  const [postList, setPostList] = useState(null);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(null);

  return (
    <div>
      <MetaContext.Provider value={{ meta, setMeta }}>
        <PostListContext.Provider value={{ postList, setPostList }}>
          <Header />
          <main className="cafeSearcher">
            <PageContext.Provider value={{ page, setPage }}>
              <SearchBar />
              <PostContext.Provider value={{ post, setPost }}>
                <PostList />
              </PostContext.Provider>
              <Pagination />
            </PageContext.Provider>
          </main>
        </PostListContext.Provider>
      </MetaContext.Provider>
      <Footer />
    </div>
  );
}
