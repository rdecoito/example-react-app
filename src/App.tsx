import { AppBody } from './components/AppBody';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <Layout>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <AppBody>
        This is an application!!
      </AppBody>
    </Layout>
  );
}

export default App;
