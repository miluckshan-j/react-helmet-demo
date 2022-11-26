import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  IconButton,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Text,
  Image,
  Stack,
  Heading,
  TableContainer,
  Table,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { Pokemons } from "../constants";
import { AiOutlineHome } from "react-icons/ai";
import { SEO } from "../components";

const Details = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  const pokemon = Pokemons.find((element) => element.number === number);

  return (
    <Container maxW="2xl" paddingX="10" paddingY="5" centerContent>
      <SEO
        description={pokemon.descriptions}
        image={pokemon.image}
        title={pokemon.name}
        url={window.location.href}
        key={pokemon.name}
      />
      <IconButton
        aria-label="Home"
        icon={<AiOutlineHome />}
        onClick={() => {
          navigate("/");
        }}
      />
      <Card maxW="sm" marginTop="5" alignContent="center">
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
            <Text fontSize="2xl" textAlign="center">
              #{pokemon.number}
            </Text>
            <Text>{pokemon.descriptions}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <TableContainer w="100%">
            <Table variant="unstyled" whiteSpace={"initial"}>
              <Tbody>
                <Tr>
                  <Td fontWeight="medium">Type(s)</Td>
                  <Td> | {pokemon.types.map((type) => type + " | ")}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="medium">Height</Td>
                  <Td>{pokemon.height}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="medium">Weight</Td>
                  <Td>{pokemon.weight}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="medium">Weakness(es)</Td>
                  <Td w={"100%"}>
                    {" "}
                    | {pokemon.weaknesses.map((weakness) => weakness + " | ")}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Details;
