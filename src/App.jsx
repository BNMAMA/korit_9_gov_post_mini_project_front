import Loading from "./components/common/Loading";
import MainLayout from "./components/common/MainLayout";
import AuthRoute from "./routes/AuthRoute";

function App() {
    return <MainLayout>
        {/* authroute 안에 children */}
        <AuthRoute />
        {/* <Loading /> */}
    </MainLayout>
}

export default App;