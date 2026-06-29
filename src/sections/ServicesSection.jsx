import { servicesData } from '../data/services'
import ServiceCard from '../components/common/ServiceCard'
import SectionHeading from '../components/common/SectionHeading'
import Container from '../components/common/Container'

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Every Shopify Problem, Handled"
          description="From quick bug fixes to complex integrations -- our team covers the full spectrum of Shopify development and support."
          center
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
