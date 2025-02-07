import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Homepage from "../src/pages/HomePage";
import ProfilePage from "../src/pages/ProfilePage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/profile");
  //   }
  // }, [isAuthenticated, navigate]);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <navigate to="/" />}
          />
          {/* <Route path="profile" element={<ProfilePage />} /> */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
