import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import hArticle1 from "../../images/home/hArticle1.jpg";
import hArticle2 from "../../images/home/hArticle2.jpg";
import hArticle3 from "../../images/home/hArticle3.jpg";
function ArticleGroup(article) {
  console.log(article);

  const handleChange = (e) => {
    const pClass = e.target.parentElement;
    console.log(e.target);
    if (e.target.className === "article nochosen") {
      for (let i = 0; i < pClass.childNodes.length; i++) {
        pClass.childNodes[i].className = "article nochosen";
      }
      e.target.classList.remove("nochosen");
      e.target.classList.add("chosen");
    } else if (e.target.className === "article chosen") {
      e.target.className = "article nochosen";
    }
  };
  return (
    <div
      // key={article.id}
      className="article nochosen"
      onClick={handleChange}
    >
      <div className="article-header">
        <img src={article.image} alt="article" />
      </div>
      <div className="article-content">
        <p>{article.title}</p>
        <div className="ac-detail">
          <p className="ac-date">{article.date}</p>
          <Link to={article.link}>
            <button>
              <IoIosArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ArticleGroup;
