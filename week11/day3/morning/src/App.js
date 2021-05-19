import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="shipping-form-header">Forms React</h1>
      <div className="shipping-form-container">
        <form className="shipping-form">
          <input
            className="shipping-input-first-name"
            type="text"
            placeholder="First Name"
          />
          <input
            className="shipping-input-last-name"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="shipping-input-address"
            type="text"
            placeholder="Street Address"
          />
          <input
            className="shipping-input-apt"
            type="text"
            placeholder="Apt, Ste"
          />
          <input
            className="shipping-input-zip"
            type="text"
            placeholder="Postal Code"
          />
          <input
            className="shipping-input-city"
            type="text"
            placeholder="City"
          />
          <input
            className="shipping-input-state"
            type="text"
            placeholder="State"
          />
          <input
            className="shipping-input-country"
            type="text"
            placeholder="Country"
          />
          <input
            className="shipping-input-phone"
            type="text"
            placeholder="Phone"
          />
          <input
            className="shipping-input-submit"
            type="submit"
            placeholder="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
