import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeSearch from "./components/RecipeSearch";



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header />
      <RecipeSearch />
      <Category />
      <Pages />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
