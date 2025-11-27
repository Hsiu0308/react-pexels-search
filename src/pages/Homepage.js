import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const auth = process.env.REACT_APP_PEXELS_AUTH;
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = useCallback(
    async (url, newSearchTerm) => {
      setPage(1);
      try {
        let result = await axios.get(url, {
          headers: { Authorization: auth },
        });
        setData(result.data.photos);
        setCurrentSearch(newSearchTerm || input);
      } catch (error) {
        console.log(error);
        alert("搜尋時發生錯誤，請稍後再試。");
      }
    },
    [auth, input]
  );

  const handlePopularSearch = (keyword) => {
    const newURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=15&page=1`;
    search(newURL, keyword);
    setInput(keyword);
  };

  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    try {
      let result = await axios.get(newURL, {
        headers: { Authorization: auth },
      });
      setData(data.concat(result.data.photos));
    } catch (error) {
      console.log(error);
      alert("載入更多圖片失敗。");
    }
  };

  useEffect(() => {
    search(initialURL);
  }, [search]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        className="hero-section"
        style={{ textAlign: "center", padding: "3rem 1rem 0" }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#333" }}>
          探索高品質免版權圖片
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>
          由全球創作者提供的免費圖庫，隨時隨地尋找靈感。
        </p>
      </div>

      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />

      <div
        className="popular-keywords"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}
      >
        {["Nature", "Technology", "Food", "Travel", "Animals"].map((tag) => (
          <button
            key={tag}
            onClick={() => handlePopularSearch(tag)}
            style={{
              padding: "0.5rem 1.2rem",
              border: "1px solid #ddd",
              borderRadius: "20px",
              backgroundColor: "white",
              cursor: "pointer",
              fontSize: "1rem",
              color: "#555",
              transition: "all 0.2s",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="pictures">
        {data && data.length === 0 && (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "3rem",
              gridColumn: "1 / -1",
            }}
          >
            <h3 style={{ color: "#888" }}>
              找不到相關圖片，請嘗試其他關鍵字。
            </h3>
          </div>
        )}

        {data &&
          data.map((d) => {
            return <Picture data={d} key={d.id} />;
          })}
      </div>

      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
