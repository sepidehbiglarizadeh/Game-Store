import AppBar from "../components/AppBar/AppBar";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import DesktopNavigation from "../components/DesktopNavigation/DesktopNavigation";

const Layout = ({children}) => {
    return ( 
        <div dir="rtl" className="p-4 text-center">
            <DesktopNavigation/>
            <AppBar/>
            {children}
            <BottomNavigation/>
        </div>
     );
}
 
export default Layout;