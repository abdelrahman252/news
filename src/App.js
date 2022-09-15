import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "./components/newsCard/NewsCard";
import styled from "styled-components";
import alan from "./img/alan.jpg";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "c7cb9c6771adc7c7a036d845edf4075a2e956eca572e1d8b807a3e2338fdd0dc/stage";
function App() {
  const [newsArticle, setNewsArticle] = useState();
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticle(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <Div>
        <Image src={alan} alt="logo" />
      </Div>
      <NewsCard articles={newsArticle} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
const Div = styled.div`
  padding: 0 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: "column-reverse";
    text-align: "center";
  }
`;
const Image = styled.img`
  height: 30vmin;
  width: 45%;
  padding: 0 5%;
  margin: 3% 0;
  border-radius: 17%;
  @media (max-width: 767px) {
    height: 35vmin;
    width: 80%;
  }
`;
