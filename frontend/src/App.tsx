import DeliveryDetails from './NextDelivery/nextDelivery';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="navigation">
          <a href="#" className="nav-link">
            Home
          </a>
        </nav>
      </header>

      <main className="main-content">
        <DeliveryDetails />
      </main>

      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;
