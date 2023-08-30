import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../database/hooks/useVideoList";
import Video from "./video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  // console.log(videos.length);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 4)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video, index) =>
            video.noq > 0 ? (
              <Link to={`Quiz_page/${video.youtubeID}`}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                  key={video.index}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                id={video.youtubeID}
                noq={video.noq}
                key={video.youtubeID}
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
