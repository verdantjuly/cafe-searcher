import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MetaContext, PageContext, PostListContext } from "./CafeSearcher";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState(null);
  const { page } = useContext(PageContext);
  const { setPostList } = useContext(PostListContext);
  const { setMeta } = useContext(MetaContext);
  const [isClicked, setIsClicked] = useState(false);
  const fetchData = async () => {
    const response = await axios.get("https://dapi.kakao.com/v2/search/cafe", {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}`,
      },
      params: { query, page, size: 5 },
    });
    setPostList(response.data.documents);
    setMeta(response.data.meta);
  };
  useEffect(() => {
    if (query) {
      fetchData();
      setIsClicked(false);
    }
  }, [isClicked, page]);

  return (
    <nav>
      <form>
        <input
          type="text"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setIsClicked(true);
          }}
        >
          검색
        </button>
      </form>
    </nav>
  );
}
