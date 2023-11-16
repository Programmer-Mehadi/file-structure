import { Fragment } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addRootFolder } from "@/redux/slices/fileStructureSlice"

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [folderName, setFolderName] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  function handleAdd() {
    if (!folderName) {
      setError("Folder name is required")
      return
    }
    setError("")
    dispatch(addRootFolder({ name: folderName }))
    setFolderName("")
    setShowModal(false)
  }
  return (
    <Fragment>
      {/* header */}
      <div className="bg-gray-600 text-white py-3 md:py-4 lg:py-6 text-center text-lg md:text-3xl lg:text-4xl flex justify-between px-4 md:px-6">
        <div>
          <h1 className="font-bold">File Structure</h1>
        </div>
        <div>
          <i
            className="fa fa-plus text-xl text-white rounded-[4px] h-fit p-2 cursor-pointer"
            aria-hidden="true"
            onClick={() => setShowModal(true)}
          ></i>
        </div>
      </div>
      {/* modal */}
      {showModal && (
        <div
          className="min-h-screen w-full absolute bg-gray-500 bg-opacity-80 top-0 left-0 z-50 flex justify-center p-8 md:items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white text-slate-800 w-full h-full rounded-[5px] overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-cyan-600 py-4 md:py-6 lg:py-8 flex justify-between px-4 md:px-6 items-center">
              <h2 className="font-bold  text-white  text-left text-lg md:text-3xl lg:text-4xl">
                Add Folder
              </h2>
              <i
                className="fa fa-window-close rounded-[5px] h-fit p-2 text-red-600 text-3xl cursor-pointer"
                onClick={() => setShowModal(false)}
                aria-hidden="true"
              ></i>
            </div>
            <div className="px-4 md:px-6 pb-10 ">
              <div className="grid gap-3 py-8">
                <label className="font-bold">Folder Name</label>
                <div>
                  <input
                    value={folderName}
                    onChange={(e) => {
                      setFolderName(e.target.value)
                      setError(
                        e.target.value.length > 0
                          ? ""
                          : "Folder name is required"
                      )
                    }}
                    type="text"
                    className="w-full border border-slate-300 rounded-[5px] p-2"
                  />
                  {error !== "" && (
                    <p className="text-red-600 text-xs mt-1">{error}*</p>
                  )}
                </div>
              </div>
              <button
                className="bg-cyan-600 text-white px-4 md:px-6 py-2 md:py-3 lg:py-4 rounded-[5px]"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}
