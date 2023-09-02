import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../database/hooks/useVideoList";
import Video from "./video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          loader={<h3>loading....</h3>}
          next={() => setPage(page + 4)}
          hasMore={hasMore}
        >
          {videos.map((video, index) =>
            video.noq > 0 ? (
              <Link
                to={`Quiz_page/${video.youtubeID}`}
                state={{ videoTitle: video.title }}
                key={index}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                  key={index}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={index}
              />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div> no data found</div>}
      {error && <div>There was an error</div>}
      {loading && <div>loading....</div>}
    </div>
  );
}
