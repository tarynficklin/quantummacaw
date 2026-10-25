// Replaces 404.html, a standalone page without the site's nav or styles.
export default function NotFound() {
  return (
    <div className="page-notfound">
      <title>Page Not Found</title>
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    </div>
  )
}
