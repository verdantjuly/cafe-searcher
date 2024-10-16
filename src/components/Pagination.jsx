import { PageContext, PostListContext } from "./CafeSearcher";
import { useContext } from "react";
import "./Pagination.css";
import { MetaContext } from "./CafeSearcher";
export default function Pagination() {
  const { page, setPage } = useContext(PageContext);
  const { postList } = useContext(PostListContext);
  const { meta } = useContext(MetaContext);
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => {
          handlePrev();
        }}
      >
        이전
      </button>
      <span>{page}</span>

      <button
        onClick={() => {
          handleNext();
        }}
        disabled={!postList || meta.is_end}
      >
        다음
      </button>
    </div>
  );
}
