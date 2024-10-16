import "./Header.css";
import { PostListContext } from "./CafeSearcher";
import { useContext } from "react";

export default function Header() {
  const { setPostList } = useContext(PostListContext);
  return (
    <header>
      <h1
        onClick={(event) => {
          event.preventDefault();
          setPostList(null);
        }}
      >
        <i>Daum</i> 카페 검색하기
      </h1>
    </header>
  );
}
