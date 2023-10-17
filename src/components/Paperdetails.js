import React from "react";

const PaperDetails = ({ paper }) => {
  return (
    <div>
      <h1>{paper.title}</h1>
      <p>Abstract: {paper.abstract}</p>
      {/* <p>Author: {paper.authors[0].name}</p> */}
      {/* <p>Citation Count: {paper.citationCount}</p>
      <p>Is Open Access: {paper.isOpenAccess ? "Yes" : "No"}</p> */}
      {/* <a href={paper.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <p>Citation Styles:</p>
      <pre>{paper.citationStyles.bibtex}</pre> */}
    </div>
  );
};

export default PaperDetails;
