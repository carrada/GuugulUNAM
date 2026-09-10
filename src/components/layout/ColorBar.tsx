export function ColorBar() {
  return (
    <div className="flex h-1 w-full" aria-hidden="true">
      <span className="flex-1 bg-google-blue" />
      <span className="flex-1 bg-google-red" />
      <span className="flex-1 bg-google-yellow" />
      <span className="flex-1 bg-google-green" />
    </div>
  )
}
