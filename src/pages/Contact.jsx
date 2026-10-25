import { Link } from 'react-router'

// The old site's two contact pages (/contact and /contact/info) showed the same form and
// never sent it anywhere: "Continue" went to the second page and "Done" went home.
// That flow is kept as-is.
export default function Contact({ step }) {
  const next = step === 'details' ? { to: '/contact/info', label: 'Continue' } : { to: '/', label: 'Done' }

  return (
    <>
      <title>Contact Us</title>
      <meta name="description" content="Get ahold of us" />
      <section className="contact">
        <div className="contact-form">
          <input type="text" name="name" placeholder="NAME" className="input" aria-label="Name" />
          <input type="text" name="email" placeholder="E-MAIL ADDRESS" className="input" aria-label="E-mail address" />
          <textarea rows="4" placeholder="PROJECT DESCRIPTION" className="input" aria-label="Project description"></textarea>
          <Link to={next.to} className="button">
            {next.label}
          </Link>
        </div>
      </section>
    </>
  )
}
