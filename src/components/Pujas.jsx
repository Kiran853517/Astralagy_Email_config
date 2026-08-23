import { pujas } from '../data/websiteData'

export default function Pujas() {
  return (
    <section id="pujas" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Rituals</span>
          <h2 className="section-title">Special Pujas & Spiritual Rituals</h2>
        </div>

        <div className="puja-grid">
          {pujas.map((puja) => (
            <div className="puja-card" key={puja.title}>
              <img src={puja.image} alt={puja.title} />
              <div className="puja-card-body">
                <h3>{puja.title}</h3>
                <p>{puja.description}</p>
                <a href="#contact" className="card-link">
                  Know More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
