import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <TaskBoard />
      </main>
    </div>
  );
};

export default App;
