import React from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className="app" style={{ margin: 0, padding: 0 }}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
