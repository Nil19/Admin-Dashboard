"use client";

import { Card, List, ListItem, Title } from '@tremor/react';

export default function Views() {
  const cities = [
    {
      city: 'Athens',
      rating: '2 open PR',
    },
    {
      city: 'Lucerne',
      rating: '1 open PR',
    },
    {
      city: 'Zurich',
      rating: '0 open PR',
    },
    {
      city: 'Vienna',
      rating: '1 open PR',
    },
    {
      city: 'Lissbon',
      rating: '0 open PR',
    },
  ];
  return (
    <Card className="mx-auto max-w-md">
      <Title>Tremor's Hometowns</Title>
      <List className="mt-2">
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}