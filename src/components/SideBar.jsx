import { Flex, Text, Heading } from "@chakra-ui/react";

export const SideBar = (categorieData) => {
  return (
    <Flex w="15rem" h="100vh" direction="column" boxShadow="xl">
      <Flex
        h="10%"
        w="100%"
        justify="flex-start"
        align="center"
        boxShadow="base"
      >
        <Heading ml="1rem">Categories</Heading>
      </Flex>
      <Flex direction="column" h="90%">
        {categorieData.map((name) => (
          <Flex
            w="100%"
            h="10%"
            align="center"
            _hover={{ fontWeight: "bold", boxShadow: "base" }}
          >
            <Text ml="1rem" _hover={{ color: "tomato", cursor: "pointer" }}>
              {name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
