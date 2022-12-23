import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function NewsList() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        '/api/harmonydic/contents/news.json?category=digital&approved=true&page=1&pageSize=20&pagesToShow=10&range=1'
      )
      .then((data) => {
        setNewsData(data.data.list);
      });
  }, []);

  console.log('newsDataList : ', newsData);

  return (
    <div>
      <StNewsContainerName>실시간 IT 뉴스</StNewsContainerName>
      <StNewsContainer>
        <StNewsItemContainer>
          {newsData &&
            newsData.map((news) => (
              <StNewsItem key={news.contentId}>
                {/* rel="noreferrer" or rel="noopener noreferrer" 은 보안 때문에 사용한다. */}
                <StATag href={news.contentUrl} target="_blank" rel="noreferrer">
                  - {news.title}
                </StATag>
              </StNewsItem>
            ))}
        </StNewsItemContainer>
      </StNewsContainer>
    </div>
  );
}

export default NewsList;

const StNewsContainer = styled.div`
  width: 200px;
  height: 100px;
  overflow-y: scroll;
  border: 3px solid black;
  padding: 10px;
  margin: 10px 0px 10px 0px;
  @media screen and (min-width: 800px) {
    background-size: 500px 280px;
    width: 500px;
    height: 250px;
  }
`;
const StNewsContainerName = styled.div`
  background-color: #cfcfcf;
  margin-bottom: 10px;
  border: 3px solid black;
  padding: 5px;
  text-align: center;
`;
const StNewsItemContainer = styled.div`
  margin: 5px;
`;
const StNewsItem = styled.div`
  margin: 3px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; // text-overflow 는 overflow 속성이 hidden,scroll,auto 이면서 white-space:nowrap 일 경우 일때만 적용됨
`;
const StATag = styled.a`
  text-decoration: none;
`;
