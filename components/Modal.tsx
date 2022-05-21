import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from 'atoms/modalAtoms'
import MuiModal from '@mui/material/Modal'
import useAuth from '../hooks/useAuth'

function Modal() {
  const [movie, setMovie] = useRecoilState(movieState)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const { user } = useAuth()



  const handleClose = () => {
    setShowModal(false)
  }



  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className=""
    >
      <>
        Modal
      </>
    </MuiModal>
  )
}

export  {Modal }
