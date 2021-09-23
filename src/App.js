import "./App.scss"
import MainLayout from "./layouts/MainLayout"
import Routing from "./components/Routing"

const App = () => {
  return (
    <div className="App">
      <MainLayout />
      <Routing />
    </div>
  )
}

export default App
