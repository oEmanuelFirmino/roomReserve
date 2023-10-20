import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
