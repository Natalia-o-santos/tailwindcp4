import "./App.css"
import { Button } from "./components/Button/Button"

function App() {
  return (
    <div className="mx-auto w-xl">
      <h1 className="font-[Open_Sans] text-3xl font-bold text-indigo-600">
        Tailwind
      </h1>
      <div className="flex justify-between align-center mt-4">
        <Button disabled>Button</Button>
        <Button>Button</Button>
        <Button variant="success">Button</Button>
      </div>
    </div>
  )
}

export default App
