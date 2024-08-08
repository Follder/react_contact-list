import { ContactDetail } from '../ContactDetail';
import { ContactList } from '../ContactList';
import { CreateContact } from '../CreateContact';
import './App.css';

function App() {
  return (
    <div className="App container mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <CreateContact />     
        <ContactList />
      </div>
    </div>
  );
}

export default App;
