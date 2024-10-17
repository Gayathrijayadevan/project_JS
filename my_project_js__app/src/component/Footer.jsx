import {Outlet} from "react-router-dom"
function Footer(){
    return(
        <>
        <footer className="footer bg-secondary"style={{textAlign:"center"}}>
            <h2>footer</h2>
        </footer>
        <Outlet/>
        </>
    )
}
export default Footer