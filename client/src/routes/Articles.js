import React, { useEffect, useState } from "react";
import "./css/Articles.css";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import axios from "axios";

function Article({ article }) {
  return <h1>게시물 하나</h1>;
}

function Articles() {
  // Carousel 세팅
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      // setError(null)
      setArticles(null);
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/board/boardlist/"
      );
      const data = {
        title: "테스트 제목",
        content:
          "테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다. 테스트 내용입니다. 이것은 테스트 내용입니다.",
        views: 300,
        author: "tason",
        time: "2021-08-10 10:39",
      };
      setArticles([...articles, data]);
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
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Articles;
