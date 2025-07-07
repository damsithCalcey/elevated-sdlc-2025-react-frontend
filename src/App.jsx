import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import CreateTaskModal from "./components/Modals/CreateTaskModal";
import ViewTaskModal from "./components/Modals/ViewTaskModal";
import EditTaskModal from "./components/Modals/EditTaskModal";
import ConfirmModal from "./components/Modals/ConfirmModal";
import ConfirmCompleteModal from "./components/Modals/ConfirmCompleteModal";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Header />
          <TaskBoard />
        </main>
        <CreateTaskModal />
        <ViewTaskModal />
        <EditTaskModal />
        <ConfirmModal />
        <ConfirmCompleteModal />
      </div>
    </TaskProvider>
  );
};

export default App;
