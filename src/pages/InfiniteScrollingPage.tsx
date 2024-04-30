import { useCallback } from "react";
import { Item } from "../utils/fetchDummyApi";
import usePaginatedAxiosQuery from "../hooks/usePaginatedAxiosQuery";

const LIMIT = 10;

function SkeletonItems() {
  return Array.from({ length: Math.floor(LIMIT / 2) }, (_, index) => (
    <div key={index} className="item skeleton">
      Loading...
    </div>
  ));
}

export default function InfiniteScrollingPage() {
  const { items, isLoading, fetchNextPage } = usePaginatedAxiosQuery<Item>({
    url: "/items",
    fetchOnMount: true,
    initialPage: 1,
    limit: LIMIT,
  });

  const lastItemRef = useCallback((item: HTMLDivElement | null) => {
    if (item == null) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextPage();
        observer.unobserve(item);
      }
    });

    observer.observe(item);
  }, []);

  return (
    <>
      <h1>Infinite scrolling</h1>
      <div className="list">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="item"
            ref={index === items.length - 1 ? lastItemRef : undefined}
          >
            {item.id}
          </div>
        ))}

        {isLoading && <SkeletonItems />}
      </div>
    </>
  );
}
