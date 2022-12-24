import axios from 'axios';
import { useEffect, useState } from 'react';
import Content from './Components/Content';
import { StudentsContext } from './StudentsContext';
const url = 'http://localhost:8000/students';

function App() {
  const [globalStudents, setGlobalStudents] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setGlobalStudents(response.data);
      console.log(typeof response.data);
    });
  }, []);

  return (
    <div className="App">
      <StudentsContext.Provider value={{ globalStudents, setGlobalStudents }}>
        <Content />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
