import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";

const NewCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  activeArticle,
  i,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <CardC
      ref={elRefs[i]}
      className={classNames(CardC, activeArticle === i ? Cardd : null)}
    >
      <CardActionArea href={url} target="_blank">
        <Media
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
          title={title}
        />
        <Details>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </Details>
        <Title gutterBottom variant="h5" component="h2">
          {title}
        </Title>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionsdiv>
        <Button size="small" color="primary" href={url}>
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary" component="h2">
          {i + 1}
        </Typography>
      </CardActionsdiv>
    </CardC>
  );
};

export default NewCard;
const Media = styled(CardMedia)({
  height: 250,
});
const Details = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

const CardC = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottom: "10px solid white",
});
const Cardd = styled("div")({
  borderBottom: "10px solid red",
});

const Title = styled(Typography)({
  padding: "0 16px",
});
const CardActionsdiv = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
