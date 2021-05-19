import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Forms React</h1>
      <div className="shipping-form-container">
        <form className="shipping-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Street Address" />
          <input type="text" placeholder="Apt, Ste" />
          <input type="text" placeholder="Postal Code" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Phone" />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
