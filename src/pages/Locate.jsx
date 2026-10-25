const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96030.62898863261!2d-112.04271338439405!3d41.2227041314035' +
  '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530e94da9c4d7b%3A0x61dcd77b34b32c!2sOgden%2C+UT' +
  '!5e0!3m2!1sen!2sus!4v1480480636306'

export default function Locate() {
  return (
    <>
      <title>Locate Us</title>
      <meta name="description" content="Find out if we're in range" />
      <section className="map">
        <iframe src={MAP_URL} title="Map of Ogden, UT" loading="lazy"></iframe>
      </section>
    </>
  )
}
