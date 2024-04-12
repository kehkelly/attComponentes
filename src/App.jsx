import Header from "./components/Header"
import Cmd from "./components/Cmd"
import Td from "./components/Td"
import Mgdd from "./components/Mgdd"
import Slv from "./components/Slv"

export default function App() {
  return (
    <div>
      <Header/>
      <main className="flex pt-12 pl-10 pb-20 text-center">
        <Cmd/>
        <Td/>
        <Mgdd/>
        <Slv/>
      </main>
    </div>
  )
}
