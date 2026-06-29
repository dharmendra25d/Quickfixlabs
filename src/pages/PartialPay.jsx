import { useEffect } from 'react'
import PPNavbar from '../sections/partialpay/PPNavbar'
import PPHero from '../sections/partialpay/PPHero'
import PPSocialProof from '../sections/partialpay/PPSocialProof'
import PPProblem from '../sections/partialpay/PPProblem'
import PPSolution from '../sections/partialpay/PPSolution'
import PPDemo from '../sections/partialpay/PPDemo'
import PPFeatures from '../sections/partialpay/PPFeatures'
import PPHowItWorks from '../sections/partialpay/PPHowItWorks'
import PPBenefits from '../sections/partialpay/PPBenefits'
import PPUseCases from '../sections/partialpay/PPUseCases'
import PPDashboard from '../sections/partialpay/PPDashboard'
import PPPricing from '../sections/partialpay/PPPricing'
import PPFAQ from '../sections/partialpay/PPFAQ'
import PPFinalCTA from '../sections/partialpay/PPFinalCTA'
import PPFooter from '../sections/partialpay/PPFooter'

export default function PartialPay() {
  useEffect(() => {
    const prev = document.title
    document.title = 'PartialPay — Deposits, Split Payments & Pre-Orders for Shopify'
    return () => { document.title = prev }
  }, [])

  return (
    <div style={{ background: '#09090B', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <PPNavbar />
      <main id="pp-main">
        <PPHero />
        <PPSocialProof />
        <PPProblem />
        <PPSolution />
        <PPDemo />
        <PPFeatures />
        <PPHowItWorks />
        <PPBenefits />
        <PPUseCases />
        <PPDashboard />
        <PPPricing />
        <PPFAQ />
        <PPFinalCTA />
      </main>
      <PPFooter />
    </div>
  )
}
