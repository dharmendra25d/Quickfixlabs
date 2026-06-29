import { useEffect } from 'react'
import LegalPage from '../components/layout/LegalPage'
import { termsData } from '../data/terms'

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service — QuickFix Labs'
    window.scrollTo(0, 0)
  }, [])

  return <LegalPage data={termsData} />
}
