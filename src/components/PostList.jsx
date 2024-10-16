import { useContext } from "react";
import { PostListContext } from "./CafeSearcher";
import "./PostList.css";

export default function PostList() {
  const { postList } = useContext(PostListContext);

  return postList ? (
    <div className="postList">
      {postList.map((post) => {
        const title = post.title.replace("<b>", "").replace("</b>", "");
        const createdAt = post.datetime.split("T")[0];
        return (
          <div className="post" key={post.url}>
            <h1>{title}</h1>
            <a href={post.url}>게시글 보기</a>
            <p>
              <strong>카페명 : </strong>
              {post.cafename}
            </p>
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={
                  post.thumbnail
                    ? `${post.title}의 이미지`
                    : "이미지가 없습니다."
                }
              />
            )}
            <p>
              <strong>작성일 : </strong>
              {createdAt}
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>검색어를 입력해 주세요.</div>
  );
}
