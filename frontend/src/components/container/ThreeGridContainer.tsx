export const ThreeGridContainer = ({children, className}:
                                   { children?: React.ReactNode, className?: string }) => {
  return <section className={`h-10 grid grid-cols-3 gap-2 ${className}`}>
    {children}
  </section>
}