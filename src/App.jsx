import { useDispatch, useSelector } from "react-redux"
import { Header } from "./components/Header/Header"
import { Authenticaton } from "./pages/Authentication/Authentication"
import UnAuthenticaton from "./pages/unAuthentication/unAuthenticaton"
import { handleSetToken } from "./redux-toolkit/tokenSlice"
import { handleSetUser } from "./redux-toolkit/userSlice"

function App() {

  const token = JSON.parse(localStorage.getItem("token")) || ""


  if (token) {
    return <>
      <UnAuthenticaton />
    </>
  } else {
    return <Authenticaton />
  }
}

export default App
