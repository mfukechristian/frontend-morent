import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CarListScreen from "./screens/carListScreen/CarListScreen";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CarListScreen />
      </main>
      <Footer />
    </div>
  );
}

export default App;
