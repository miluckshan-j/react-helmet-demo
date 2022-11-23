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
import Pokemons from "../constants/pokemon.constant";
import { AiOutlineHome } from "react-icons/ai";

const Details = () => {
  const { number } = useParams();
  const navigate = useNavigate();

  const pokemon = Pokemons.find((element) => element.number === number);

  return (
    <Container maxW="2xl" paddingX="10" paddingY="5" centerContent>
      <IconButton
        aria-label="Home"
        icon={<AiOutlineHome />}
        onClick={() => {
          navigate("/");
        }}
      />
      <Card maxW="sm" marginTop="5">
        <CardBody>
          <Image src={pokemon.image} alt={pokemon.name} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{pokemon.name}</Heading>
            <Text>{pokemon.descriptions}</Text>
            <Text fontSize="2xl">#{pokemon.number}</Text>
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
