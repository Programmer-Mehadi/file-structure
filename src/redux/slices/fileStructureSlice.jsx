import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  documents: [
    {
      id: 1,
      type: "folder",
      name: "root",
      children: [],
    },
    {
      id: 2,
      type: "folder",
      name: "root2",
      children: [],
    },
  ],
}

export const fileStructureSlice = createSlice({
  name: "fileStructure",
  initialState,
  reducers: {
    addRootFolder: (state, action) => {
      state.documents.push({
        id: state.documents.length + 1,
        type: "folder",
        name: action.payload.name,
        children: [],
      })
    },
    addChildren: (state, action) => {
      let text = "state.documents"
      const array = action.payload.parentId.toString().split("_")
      array.forEach((t, i) => {
        if (i === 0) {
          text += `[${t - 1}]`
        } else {
          text += `.children[${t - 1}]`
        }
      })

      console.log(text)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addRootFolder, addChildren } = fileStructureSlice.actions

export default fileStructureSlice.reducer
