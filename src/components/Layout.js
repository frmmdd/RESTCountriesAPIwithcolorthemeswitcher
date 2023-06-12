import HeaderComponent from "./HeaderComponent"

 
const Layout =({ children }) => {
  return (
    <>
      <HeaderComponent />
      <>{children}</>
    </>
  )
}

export default Layout