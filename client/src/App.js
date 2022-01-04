import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import MainPage from "./components/mainPage/MainPage";
import Users from "./components/users/Users";
import store from "./redux/redux-store";
import './App.css'
function App() {
    return (
        <div>
            <Router>
                <Provider store={store}>
                    <div>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='/stats/*' element={<Users/>}/>
                        </Routes>
                    </div>
                </Provider>
            </Router>
        </div>
    );
}

export default App;
