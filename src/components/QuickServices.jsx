import * as Icons from 'lucide-react'
import { quickServices } from '../data/websiteData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function QuickServices() {
  const ref = useFadeIn()

  return (
    <section className="quick-services">
      <div className="container">
        <div ref={ref} className="quick-grid fade-up">
          {quickServices.map((service) => {
            // service.icon is a string like "Home" — we look up the matching
            // icon component from the lucide-react library.
            const Icon = Icons[service.icon]
            return (
              <div className="quick-card" key={service.title}>
                <div className="icon-wrap">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#services" className="card-link">
                  Learn More →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
