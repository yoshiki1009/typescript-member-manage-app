import {memo, useCallback, VFC} from "react";
import { Box, Flex, Heading,  Link, useDisclosure } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";


export const Header: VFC = memo(() =>{
  const{isOpen, onOpen, onClose} = useDisclosure();
  const history = useHistory();


  // eslint-disable-next-line
  const onClickHome =  useCallback(() => history.push("/home"),[]);
  // eslint-disable-next-line
  const onClickUserManagement = useCallback(() => history.push("/home/user_management"),[]);

  // eslint-disable-next-line
  const onClickSetting = useCallback(() => history.push("/home/setting"),[]);


  return(
    <>
    <Flex as='nav' bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{base:3, md:5}}>
      <Flex align='center' as="a" mr={8} _hover={{cursor:"pointer"}} onClick={onClickHome}>
      <Heading as="h1" fontSize={{base:"md", md:"lg"}}>User Management App</Heading>
      </Flex>
      <Flex align="center" fontSize="sm" flexGrow={2} display={{base:'none', md:'flex'}}>
        <Box pr={4}>
          <Link onClick={onClickUserManagement}>User List</Link>
        </Box>
          <Link onClick={onClickSetting}>Setting</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen}/>
    </Flex>

    <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting}/>
    </>
  )
});