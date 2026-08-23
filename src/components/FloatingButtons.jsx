import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '../data/websiteData'

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
        className="fab-call"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}
