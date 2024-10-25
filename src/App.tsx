import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { SubjectProvider } from './utils/context/subjectContext';
function App() {
  return (
    <>
      <SubjectProvider>
        <Nav />
        <Outlet />
      </SubjectProvider>
    </>
  );
}

export default App;
