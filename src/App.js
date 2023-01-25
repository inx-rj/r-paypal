import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "AY6d1oHkK5aVXtoHgJq5ivOLjFSHl51Ugfyt8pRmVeGhmkC_44-4brUoz6ri7swWWgZovJUyrTbIf_3x" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}