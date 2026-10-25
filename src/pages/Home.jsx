import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <title>Quantum Macaw</title>
      <meta name="description" content="Quantum Macaw" />
      <section className="logo">
        <img src="/img/qm-logo.png" alt="Quantum Macaw Logo" />
      </section>
      <section className="gallery">
        <h2>We Do Cinematography</h2>
        {/* The spaces between these inline images are part of the original layout. */}
        <img src="/img/display-1.jpg" alt="Icy Mountain" />{' '}
        <img src="/img/display-2.jpg" alt="Desert" />{' '}
        <img src="/img/display-3.jpg" alt="Starlit Forest" />
      </section>
      <section className="videos">
        <article>
          <h2>Check us out</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nunc a risus semper pretium.
            Aliquam pulvinar nisi id erat condimentum aliquam. Phasellus cursus nunc augue, vel fringilla lectus
            faucibus sed.
          </p>
        </article>
        <iframe
          src="https://www.youtube.com/embed/sC9abcLLQpI"
          title="Quantum Macaw reel"
          allowFullScreen
          className="live-video"
        ></iframe>
      </section>
      <section className="display">
        <h3>Get ahold of us</h3>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
      </section>
    </>
  )
}
