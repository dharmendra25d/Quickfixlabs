import { useEffect } from 'react'
import LegalPage from '../components/layout/LegalPage'
import { refundData } from '../data/refund'

export default function RefundPolicy() {
  useEffect(() => {
    document.title = 'Refund Policy — QuickFix Labs'
    window.scrollTo(0, 0)
  }, [])

  return <LegalPage data={refundData} />
}
