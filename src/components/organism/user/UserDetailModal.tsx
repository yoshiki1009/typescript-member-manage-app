import { memo, VFC } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { User } from '../../../types/api/user'

type Props = {
  user: User | null
  isOpen: boolean
  onClose: () => void
}

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay>
        <ModalContent pb={6}>
          <ModalHeader>User Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx={4}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value={user?.username} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={user?.name} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value={user?.email} isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>TEL</FormLabel>
                <Input value={user?.phone} isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})
