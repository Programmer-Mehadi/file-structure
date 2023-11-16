import Header from "@/components/FileStructure/Sections/Header"
import Body from "@/components/FileStructure/Sections/Body"
export default function FileStructure() {
  return (
    <section className="min-h-[500px] h-screen bg-gray-200 grid grid-cols-1 justify-center items-center p-4 md:p-8 lg:p-10 relative top-0 left-0 z-30">
      <div className="bg-white max-w-[1000px] mx-auto text-slate-800 w-full h-full rounded-[5px] overflow-auto">
        <Header />
        <Body />
      </div>
    </section>
  )
}
