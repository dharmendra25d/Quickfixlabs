import { useEffect } from 'react'
import LegalPage from '../components/layout/LegalPage'
import { privacyData } from '../data/privacy'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy — QuickFix Labs'
    window.scrollTo(0, 0)
  }, [])

  return <LegalPage data={privacyData} />
}
