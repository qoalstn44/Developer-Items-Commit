import axios from "axios";
import {useEffect, useState} from "react";

function NewsList() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "/api/harmonydic/contents/news.json?category=digital&approved=true&page=1&pageSize=20&pagesToShow=10&range=1"
      )
      .then((data) => {
        setNewsData(data.data.list);
      });
  }, []);

  console.log("newsDataList : ", newsData);

  return (
    <div>
      <div>실시간 IT 뉴스</div>
      {newsData &&
        newsData.map((news) => (
          <div key={news.contentId}>
            {/* rel="noreferrer" or rel="noopener noreferrer" 은 보안 때문에 사용한다. */}
            <a href={news.contentUrl} target="_blank" rel="noreferrer">
              {news.title}
            </a>
          </div>
        ))}
    </div>
  );
}

export default NewsList;
