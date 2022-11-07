import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./app/components/layout/Footer";
import Header from "./app/components/layout/Header";
import RootRouter from "./app/components/routes/RootRouter";

function App() {
  return (
    <div className="col col-12">
      <BrowserRouter>
        <Header />
        <main>
          <RootRouter />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
