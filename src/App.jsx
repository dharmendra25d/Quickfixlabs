import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import PartialPay from './pages/PartialPay'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <Layout>
              <RefundPolicy />
            </Layout>
          }
        />
        <Route path="/partialpay" element={<PartialPay />} />
      </Routes>
    </BrowserRouter>
  )
}
