import Sidebar from "../component/main/Sidebar/Sidebar";
import MainBar from "../component/main/MainBar/MainBar";
import "./Root.css";

function Root() {
  return (
    <div className='Root'>
      <main>
        <Sidebar />
        <MainBar />
      </main>
    </div>
  );
}

export default Root;
