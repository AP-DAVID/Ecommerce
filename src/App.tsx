import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './components/Nav';
import Statement from './components/landing/Statement';
import Footer from './components/Footer';
import Products from './components/landing/Products';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Good from './components/Prod';
import Prodd from './components/Prod';


const App : React.FC = () => {

  
  return (
    <Router>
      <div className="App h-screen w-screen  overflow-x-hidden bg-slate-100">
        {/* The nav component */}

        <Nav />

        <Routes>
          <Route path="product" element={<Prodd />}>
            <Route path=":id" element={<Prodd />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Statement />

                <Products />
              </>
            }
          />
        </Routes>

        {/* The footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
