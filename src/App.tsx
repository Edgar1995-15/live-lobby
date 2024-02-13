import Main from './components/Main';
import { SocketProvider } from './services/socket/socketContext';

function App() {
  return (
      <SocketProvider>
        <Main />
      </SocketProvider>
  );
}

export default App;
