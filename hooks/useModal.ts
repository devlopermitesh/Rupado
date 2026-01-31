import { Prompt } from '@/app/generated/prisma/client'
import { create } from 'zustand'
export type ModelType = 'PromptView'
type Modeldata = {
  prompt: Prompt
}
interface UseModelProps {
  modelType: ModelType | null
  data: Modeldata
  onClose: () => void
  isOpen: boolean
  onOpen: (type: ModelType, data: Modeldata) => void
}
export const useModel = create<UseModelProps>((set) => ({
  modelType: null,
  isOpen: false,
  data: { prompt: undefined },
  onOpen: (type: ModelType, data: Modeldata) => set({ isOpen: true, modelType: type, data }),
  onClose: () => set({ isOpen: false }),
}))
