import {
  createBrowserRouter,
  createRoutesFromChildren,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Applayout from "./ui/Applayout";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AsfarUsers from "./pages/AsfarUsers";
import Action from "./pages/Action";
import EditCabin, {
  loader as editCabinLoader,
} from "./features/cabins/EditCabin";
const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Applayout />}>
      <Route index element={<Navigate replace to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="cabins" element={<Cabins />} />
      <Route
        path="cabins/editCabin"
        loader={editCabinLoader}
        element={<EditCabin />}
      />
      <Route path="users" element={<Users />} />
      <Route path="settings" element={<Settings />} />
      <Route path="account" element={<Account />} />
      <Route path="asfarusers" element={<AsfarUsers />} />
      <Route path="asfarusers/:action" element={<Action />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
