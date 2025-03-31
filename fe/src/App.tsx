import Home from './pages/Home';
import Find from './pages/Find';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Global } from '@emotion/react'
import {globalStyles} from "./styles/globalStyles.ts";
import Layout from "./components/Layout/Layout.tsx";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles}/>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find" element={<Find />} />
          </Routes>
        </Router>
      </Layout>
    </QueryClientProvider>

  )
}

export default App
