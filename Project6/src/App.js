import axios from 'axios';
import { useEffect, useState } from 'react';
import Content from './Components/Content';
import { StudentsContext } from './StudentsContext';
const url = 'http://localhost:8000/students';

function App() {
  const [globalStudents, setGlobalStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(url).then((response) => {
      setGlobalStudents(response.data);
      setLoading(false);
      console.log(typeof response.data);
    });
  }, []);

  if (loading) {
    return (
      <div className="t-w-screen t-text-6xl t-text-center">Loading...</div>
    );
  }
  return (
    <div className="App">
      <StudentsContext.Provider value={{ globalStudents, setGlobalStudents }}>
        <Content />
      </StudentsContext.Provider>
    </div>
  );
}

export default App;
