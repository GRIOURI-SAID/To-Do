
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddTask, Header, Login, SginUp } from "./components"
import Home from "./pages/home/Home";
import ListTask from "./pages/listTask/ListTask";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sginIn' element={<Login />}></Route>
          <Route path='/sginUp' element={<SginUp />}></Route>
          <Route path='/tasks' element={<ListTask />}></Route>
          <Route path='/task/add' element={<AddTask />}></Route>
        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
