import { Link } from 'react-router'

const BIO =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque mattis ligula sed sollicitudin. ' +
  'Morbi eget efficitur massa, in volutpat ipsum. Aenean laoreet, felis scelerisque mattis elementum, risus ' +
  'libero vestibulum dui, id elementum nulla magna vel augue.'

const PEOPLE = [
  { id: 'tim', name: 'Tim Bennette', photo: 'tim.png' },
  { id: 'taryn', name: 'Taryn Ficklin', photo: 'taryn.png' },
]

export default function About() {
  return (
    <>
      <title>About Us</title>
      <meta name="description" content="Learn about the team" />
      <div className="about">
        {PEOPLE.map(({ id, name, photo }) => (
          <section className="profile" id={id} key={id}>
            <h2>{name}</h2>
            <img src={`/about/img/${photo}`} className="user-pic" alt={name} />
            <p>{BIO}</p>
            <Link to="/contact" className="button">
              Contact
            </Link>
          </section>
        ))}
      </div>
    </>
  )
}
