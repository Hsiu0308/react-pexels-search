import React from "react";

const About = () => {
  const containerStyle = {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1rem",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    color: "#27ae60",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>關於這個網站</h1>

      <div style={{ fontSize: "1.2rem", color: "#444", textAlign: "left" }}>
        <p style={{ marginBottom: "1.5rem" }}>
          歡迎來到我的 Pexels 圖片搜尋網站！這是一個使用 <strong>React</strong>{" "}
          開發的個人專案。
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          這個網站串接了 <strong>Pexels API</strong>，讓使用者能夠：
        </p>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          <li>即時搜尋高品質的免費圖庫</li>
          <li>瀏覽精選的攝影作品</li>
          <li>一鍵下載喜歡的圖片</li>
        </ul>

        <h3
          style={{ fontSize: "1.5rem", margin: "2rem 0 1rem", color: "#333" }}
        >
          技術堆疊
        </h3>
        <p>本專案使用了以下技術進行開發：</p>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          {["React", "React Router", "Axios", "Sass (SCSS)", "RESTful API"].map(
            (tech) => (
              <li
                key={tech}
                style={{
                  background: "#eee",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  fontSize: "0.9rem",
                  color: "#555",
                }}
              >
                {tech}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default About;
