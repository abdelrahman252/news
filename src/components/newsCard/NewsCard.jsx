import { Grid, Grow, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NewCard from "../newCard/NewCard";
const infoCards = [
  { color: "#00838f", title: "Latest News", text: "show me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "show  the recent Entertainment news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];
const NewsCard = ({ articles, activeArticle }) => {
  if (!articles?.length) {
    return (
      <Grow in>
        <GirdD container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <InfoCard item xs={12} sm={6} md={4} lg={3}>
              <CardC style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </CardC>
            </InfoCard>
          ))}
        </GirdD>
      </Grow>
    );
  }
  return (
    <Grow in>
      <GirdD container alignItems="stretch" spacing={3}>
        {articles?.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
            // key={idx}
          >
            <NewCard article={article} i={i} activeArticle={activeArticle} />
          </Grid>
        ))}
      </GirdD>
    </Grow>
  );
};

export default NewsCard;
const GirdD = styled(Grid)({
  padding: "0 5%",
  width: "100%",
  margin: 0,
});
const InfoCard = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
});
const CardC = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "45vh",
  padding: "10%",
  borderRadius: 10,
  color: "white",
});
