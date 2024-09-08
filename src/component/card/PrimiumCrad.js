import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import styles from "./Card.module.scss";
import ButtonCustom from "../buttonComponent/ButtonCustom";

const PremiumCard = () => {
  // Set the default active card (0 for the first card)
  const [activeCard, setActiveCard] = useState(1);

  // Function to handle card click
  const handleCardClick = (index) => {
    setActiveCard(index); // Set the clicked card as active
  };

  const cards = [
    {
      id: 0,
      premiumName: 'Beta',
      title: "Free",
      list: [
        {status: 'active', text: 'Farm Simulations'},
        { status: 'inactive', text: 'Educational Training Access' },
        { status: 'inactive', text: 'Farm Network Visibility' },
        { status: 'inactive', text: 'Farm Management Tools' }
      ],
    },
    {
        id: 1,
        premiumName: 'Pilot',
        title: "580$",
        titleSmall: '/ Annually',
        list: [
            { status: 'active', text: 'Farm Simulations' },
            { status: 'active', text: 'Educational Training Access' },
            { status: 'active', text: 'Farm Network Visibility' },
            { status: 'inactive', text: 'Farm Management Tools' }
          ],
    },
    {
        id: 2,
        miumName: 'Commercial',
        title: "960$",
        titleSmall: '/ Annually',
        list: [
            { status: 'active', text: 'Farm Simulations' },
            { status: 'active', text: 'Educational Training Access' },
            { status: 'active', text: 'Farm Network Visibility' },
            { status: 'active', text: 'Farm Management Tools' }
          ],
    },
  ];

  return (
    <>
      <Box className={styles.premiumCardWrapper}>
        {cards.map((card, index) => (
          <Card
            className={`${activeCard === index ? styles.active : null} ${index == 0 && styles.free} ${styles.premiumCard}`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h5" className={`title theme-black-color`}>
                  {card.premiumName}
                </Typography>
                <Typography gutterBottom variant="h3" component="h3" className={`title text-primary ${styles.cardTitle}`}>
                  {card.title} <span>{card.titleSmall}</span>
                </Typography>
                <Box className={`list-style-list`}>
                    <List>
                        {card.list.map((item, i) => (
                            <ListItem key={i} className={`${item.status === 'active' && styles.active}`} >{item.text}</ListItem>
                        ))}
                    </List>
                </Box>
                <Box mt={2}>
                  <ButtonCustom variant="outlined" value="Choose Plan"  />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default PremiumCard;
