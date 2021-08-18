import React, { useEffect, useState } from "react";
import "./css/Articles.css";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Article({ article }) {
  return (
    <>
      <div className="title-box">{article[1]}</div>
      <div className="content-box">
        <div className="title-content">{article[3]}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "0.5rem",
            padding: "1rem",
          }}
        >
          조회수: {article[4]}
        </div>
      </div>
      <div className="footer-box">
        <div style={{ padding: "0.5rem 1rem" }}>{article[2]}</div>
        <div style={{ padding: "0.5rem 1rem" }}>{article[5]}</div>
      </div>
    </>
  );
}

function Articles() {
  // Carousel 세팅
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const response = await axios.get("http://i5c106.p.ssafy.io/stalk/board/boardlist");
    return response.data;
  };

  const insertArticles = async () => {
    const allArticles = await getArticles();
    for (let i = 0; i < allArticles.length; i++) {
      console.log(i);
      setArticles((articles) => [
        ...articles,
        [
          allArticles[i]["board_TYPE"],
          allArticles[i]["board_TITLE"],
          allArticles[i]["board_USER"],
          allArticles[i]["board_CONTENT"],
          allArticles[i]["board_CNT"],
          allArticles[i]["board_YMD"],
          allArticles[i]["board_NO"],
        ],
      ]);
    }
  };

  useEffect(() => {
    insertArticles();
    console.log(articles.length);
  }, []);
  console.log(articles);

  return (
    <div className="all-article-box">
      <div className="upper-box">
        <div className="order-list">
          <div className="order">최신순</div>
          <div className="order">조회순</div>
          <div className="order">댓글부자순</div>
          <div className="order">오래된순</div>
        </div>
        <div
          style={{
            backgroundColor: "#FFA3A3",
            borderRadius: "12px",
            height: "2rem",
            fontSize: "1.2rem",
            textAlign: "center",
            paddingTop: "4px",
            width: "62%",
            marginLeft: "2.2rem",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
        >
          <Link to="/my-article" className="my-button">
            내가 작성한 글 보러 가기
          </Link>
        </div>
      </div>
      <Slider {...settings} className="slider">
        {articles.map((article, index) => (
          <div className="article-box">
            <Article article={article} key={index} />
          </div>
        ))}
      </Slider>
      <Link to="/articles/create-article" className="create-article-button">
        +
      </Link>
    </div>
  );
}

export default Articles;
