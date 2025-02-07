import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Homepage from "../src/pages/HomePage";
import ProfilePage from "../src/pages/ProfilePage";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isAuthenticated ? (
            <Route path="profile" element={<ProfilePage />} />
          ) : (
            <Route index element={<Homepage />} />
          )}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
