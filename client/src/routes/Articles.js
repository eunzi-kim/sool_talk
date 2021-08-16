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
      <div className="title-box">{article.title}</div>
      <div className="content-box">
        <div className="title-content">{article.content}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: "0.5rem",
            padding: "1rem",
          }}
        >
          조회수: 100000
        </div>
      </div>
      <div className="footer-box">
        <div style={{ padding: "0.5rem 1rem" }}>태이슨</div>
        <div style={{ padding: "0.5rem 1rem" }}>2021.07.14</div>
      </div>
    </>
  );
}

function Articles() {
  // Carousel 세팅
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const articles = [
    {
      title: "1번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "2번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "3번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
    {
      title: "4번 테스트 제목",
      content:
        "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      views: 300,
      author: "tason",
      time: "2021-08-10 10:39",
    },
  ];

  // const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      // setError(null)
      // setArticles(null);
      setLoading(true);
      // const response = await axios.get(
      //   "http://localhost:8080/board/boardlist/"
      // );
      // const sample = {
      //   title: "테스트 제목",
      //   content:
      //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
      //   views: 300,
      //   author: "tason",
      //   time: "2021-08-10 10:39",
      // };
      // setArticles([...articles, sample]);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, [Article]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>로딩중...</div>;
  if (!articles) return null;

  return (
    <div>
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
            height: "2.5rem",
            fontSize: "1.6rem",
            textAlign: "center",
            paddingTop: "4px",
            width: "87%",
            marginLeft: "2.2rem",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
        >
          <Link to="/create-article" className="create-button">
            내가 작성한 글 보러 가기
          </Link>
        </div>
      </div>

      <Slider {...settings} className="slider">
        {articles.map((article) => (
          <div className="article-box">
            <Article article={article} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Articles;
