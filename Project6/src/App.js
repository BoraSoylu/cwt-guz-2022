import axios from "axios"
import { useEffect, useState } from "react"
import StudentRow from "./Components/StudentRow"
const url = "http://localhost:8000/students"

function App() {
  const [students, setStudents] = useState('Loading Students')
  useEffect(() => {
    axios.get(url).then(response=>{
      setStudents(response.data)
    })
  }, [])
  return <div className="App">
    <StudentRow Student={students[0]}/>
  </div>;
}

export default App;
