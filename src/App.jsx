import MainLayout from "./components/common/MainLayout";
import AuthRoute from "./routes/AuthRoute";

function App() {
    return <MainLayout>
        {/* authroute 안에 children */}
        <AuthRoute />
    </MainLayout>
}

export default App;