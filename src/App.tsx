import Main from './components/Main';
import { SocketProvider } from './services/socket/socketContext';

function App() {
  return (
    <div>
      <SocketProvider>
        <Main />
      </SocketProvider>
    </div>
  );
}

export default App;
