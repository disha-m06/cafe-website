import "./Gallery.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    alt: "Freshly prepared coffee",
    category: "Coffee",
    title: "The perfect cup",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm café interior",
    category: "Interior",
    title: "Our space",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
    alt: "Freshly prepared dessert",
    category: "Desserts",
    title: "Sweet moments",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    alt: "Fresh café food",
    category: "Food",
    title: "Made fresh",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    alt: "People enjoying time together in a café",
    category: "Community",
    title: "Good company",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=85",
    alt: "Coffee and coffee beans",
    category: "Coffee",
    title: "Coffee ritual",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
    alt: "Café exterior",
    category: "Exterior",
    title: "From the outside",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    alt: "Modern café seating",
    category: "Interior",
    title: "A place to stay",
  },
  {
    src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85",
    alt: "Freshly baked dessert",
    category: "Desserts",
    title: "Little indulgences",
  },
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    alt: "Beautifully presented café food",
    category: "Food",
    title: "Made to share",
  },
];

function Gallery() {
  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">
          <p className="gallery-label">THE CAFÉ IN PICTURES</p>

          <h1>
            Moments worth
            <br />
            <span>remembering.</span>
          </h1>

          <p>
            Take a look around Brew & Bean and discover the little moments
            that make our café special.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-heading">
          <div>
            <p className="gallery-label">OUR GALLERY</p>

            <h2>A taste of the experience.</h2>
          </div>

          <p>
            From the first cup of coffee to the last conversation of the
            evening, every corner has a story.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure
              className="gallery-card"
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />

              <figcaption className="gallery-overlay">
                <span>{image.category}</span>

                <strong>{image.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div>
          <p className="gallery-label">COME EXPERIENCE IT</p>

          <h2>
            Some moments
            <br />
            are better in person.
          </h2>

          <p>
            Photos can only show you so much. Come by, take a seat, and make
            your own memories.
          </p>

          <a href="/#contact" className="gallery-button">
            Get in Touch
            <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
}

export default Gallery;