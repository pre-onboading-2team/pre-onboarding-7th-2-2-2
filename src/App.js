import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Ads, Dashboard } from "./pages";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="ads" element={<Ads />} />
      </Route>
    </Routes>
  );
}

export default App;
