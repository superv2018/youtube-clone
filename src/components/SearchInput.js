import { useState } from "react";

const SearchInput = ({ onSubmit }) => {
  const [videoSearchTerm, setVideoSearchTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(videoSearchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search Input </label>
          <input
            type="text"
            placeholder="Search...."
            value={videoSearchTerm}
            onChange={(e) => setVideoSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
