import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import "./styles/app.scss"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path={'/:id'} element={
                      <div>
                          <Toolbar/>
                          <SettingBar/>
                          <Canvas/>
                      </div>
                  }>
                  </Route>
                  <Route path={'*'} element={<Navigate to={(+new Date).toString(16)} replace />}></Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
