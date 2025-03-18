export const ThreeGridContainer = ({children}: { children?: React.ReactNode }) => {
  return <section className="h-10 grid grid-cols-3 gap-2">
    {children}
  </section>
}