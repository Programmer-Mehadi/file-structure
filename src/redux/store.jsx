import { configureStore } from "@reduxjs/toolkit"
import fileStructureSlice from "./slices/fileStructureSlice"

export const store = configureStore({
  reducer: {
    fileStructure: fileStructureSlice,
  },
})
