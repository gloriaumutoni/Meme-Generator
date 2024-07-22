import Header from "./header"
import MainPage from "./mainpage"

function App() {

  return (
    <div>
      <div className="w-[37%] mx-auto bg-white shadow-md">
      <Header/>
      <div className="w-[85%] mx-auto">
      <MainPage/>
      </div>
      
    </div>
    </div>
    
  )
}

export default App
