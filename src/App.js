import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./views/Login/Login";
import Main from "./views/Main/Main";
import Dashboard from "./views/Dashboard/Dashboard";
import Overview from "./components/Overview.Dash/Overview.dash";
import Create from "./components/Create.Dash/Create.dash";
import Messages from "./components/Messages.Dash/Messages.dash";
import Update from "./components/Update.Dash/Update.dash";
import { useAuth } from "./hooks/useAuth";
import NotFound from "./views/NotFound/NotFound";
import AllWork from "./views/AllWork/AllWork";

function App() {
  const { user } = useAuth();
  return (
    <>
      <Routes>
        {/* Main */}
        <Route exact path="/" element={<Main />} />
        <Route path="/portfolio" element={<AllWork />} />
        {/* Login */}
        <Route
          path="/admin/login"
          element={
            user ? <Navigate to={"/admin/dashboard/overview"} /> : <Login />
          }
        />
        {/* Dashboard */}
        <Route
          path="/admin/dashboard"
          element={user ? <Dashboard /> : <Navigate to={"/admin/login"} />}
        >
          <Route path="/admin/dashboard/" element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
