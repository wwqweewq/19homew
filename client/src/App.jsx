import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

const App = (props) => {
    return(
        <div className="wraper">
            <Header/>
            <Main reRender={props.reRender}/>
            <Footer/>
        </div>
    );
};

export default App;