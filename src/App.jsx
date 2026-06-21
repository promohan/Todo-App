import Form from "./components/Form"
import img from './assets/moon.jpg'
import img1 from './assets/star.jpg'

function App() {
  return (
    <>
      <div>
        <div className="App" style={{}}>
          <h1>Welcome Developer Tasks!</h1>
          <Form />
        </div>
        <img src={img} alt="bg-img" className="moon-img" />
        <img src={img1} alt="bg-img" className="star-img" />

      </div>
    </>
  )
}
export default App

