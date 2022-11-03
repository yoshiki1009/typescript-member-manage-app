import { memo, useEffect, VFC, useCallback } from 'react'
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'

import { UserCard } from '../organism/user/UserCard'
import { useAllUsers } from '../../hooks/useAllUsers'
import { UserDetailModal } from '../organism/user/UserDetailModal'
import { useSelectUser } from '../../hooks/useSelectUser'
import { useLoginUser } from '../../hooks/useLoginUser'

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { loginUser } = useLoginUser()

  // eslint-disable-next-line
  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [users, onSelectUser, onOpen]
  )

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} isAdmin={loginUser?.isAdmin} />
    </>
  )
})
