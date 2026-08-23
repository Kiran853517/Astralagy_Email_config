import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { galleryImages } from '../data/websiteData'

export default function Gallery() {
  // selectedIndex is the index of the image currently open in the lightbox.
  // null means the lightbox is closed.
  const [selectedIndex, setSelectedIndex] = useState(null)

  function showPrevious() {
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
  }

  function showNext() {
    setSelectedIndex((selectedIndex + 1) % galleryImages.length)
  }

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">Moments From Our Centre</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index} onClick={() => setSelectedIndex(index)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <ZoomIn size={26} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal, only shown when an image has been selected */}
      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <button className="lightbox-close" onClick={() => setSelectedIndex(null)} aria-label="Close">
            <X size={30} />
          </button>

          <button
            className="lightbox-nav prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <img
            src={galleryImages[selectedIndex].src}
            alt={galleryImages[selectedIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  )
}
