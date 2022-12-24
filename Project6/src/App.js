import axios from 'axios';
import { useEffect, useState } from 'react';
import Content from './Components/Content';
const url = 'http://localhost:8000/students';

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Content Students={students} />
    </div>
  );
}

export default App;
