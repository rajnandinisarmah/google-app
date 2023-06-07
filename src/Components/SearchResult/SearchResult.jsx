import React from "react";
import "./searchresult.scss";
import SingleResult from "./@core/SingleResult/SingleResult";
export default function SearchResult(props) {
  return (
    <div className="search-result">
      {/* ======FIRST TOP======= */}

      <SingleResult
        heading="Google"
        description="Search the world's information, including webpages, images, videos and more."
      />
      <div className="sub-results">
        <SingleResult
          heading="Google Meet - Online Video Calls, Meetings and Conferencing"
          description="Real-time meetings by Google. Using your browser, share your ..."
        />
        <SingleResult
          heading="My Activity"
          description="Welcome to My Activity. Data helps make Google services more ..."
        />
        <SingleResult
          heading="Account"
          description="In your Google Account, you can see and manage your info ..."
        />
        <SingleResult
          heading="Images"
          description="Google Images. The most comprehensive image search ..."
        />
      </div>

      <div className="sub-results-a"></div>
    </div>
  );
}
