import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Divider,
  CardFooter,
  Button,
  Link,
} from "@chakra-ui/react";
import { Pokemons } from "../constants";

const Home = () => {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]}
      gap="6"
      paddingX="10"
      paddingY="5"
    >
      {Pokemons.map((pokemon) => {
        return (
          <Card maxW="sm" key={pokemon.number} alignContent="center">
            <CardBody>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                width="fit-content"
                minHeight="200px"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md" textAlign="center">
                  {pokemon.name}
                </Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter alignSelf="center">
              <Link as={RouterLink} to={`/details/${pokemon.number}`}>
                <Button variant="solid">View More</Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Home;
