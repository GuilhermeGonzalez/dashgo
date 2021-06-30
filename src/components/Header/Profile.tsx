import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Guilherme Gonzalez</Text>
          <Text color="gray.300" fontSize="small">
            gcgonzalez99@hotmail.com
          </Text>
        </Box>
      }
      <Avatar size="md" nome="Guilherme Gonzalez" src="https://github.com/GuilhermeGonzalez.png" />

    </Flex>
  );
}