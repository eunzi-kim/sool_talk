import React, { useEffect, useState } from "react";
import "./css/Articles.css";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import axios from "axios";

function Article({ article }) {
  return (
    <>
      <div className="title-box">{article.title}</div>
      <div className="content-box">{article.content}</div>
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
    // {
    //   title: "5번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
    // {
    //   title: "6번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
    // {
    //   title: "7번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
    // {
    //   title: "8번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
    // {
    //   title: "9번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
    // {
    //   title: "10번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
    // {
    //   title: "11번 테스트 제목",
    //   content:
    //     "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
    //   views: 300,
    //   author: "tason",
    //   time: "2021-08-10 10:39",
    // },
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
