import ModuleList from "../Modules/list";


function Home() {
  return (
    <div className="d-flex">
      <div>
      <ModuleList />
      </div>

      <div>
      <button>Import Existing Content</button> <br/>
      <button>Import from Commons</button> <br/>
      <button>Choose Home Page</button> <br/>
      <button>View Course Stream</button> <br/>
      <button>New Announcement</button> <br/>
      <button>New Analytics</button> <br/>
      <button>View Course Notifications</button> <br/>
      <br/>
      
      <h6>To Do</h6>
      <hr/>
      </div>
    </div>
  );
}
export default Home;