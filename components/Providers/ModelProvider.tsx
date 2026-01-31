'use client'
import { useEffect, useState } from 'react'
import PromptViewModal from '../templates/modals/PromptViewmodal'

const ModalProvider = () => {
  const [IsMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!IsMounted) return null
  return (
    <>
      <PromptViewModal />
    </>
  )
}
export default ModalProvider
