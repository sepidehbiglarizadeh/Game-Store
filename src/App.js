import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation";

function App() {
  return (
    <div dir="rtl" className="p-4 text-center">
      <DesktopNavigation/>
      <BottomNavigation/>
    </div>
  );
}

export default App;
