
export default function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl">
        <span className="text-secundaria font-semibold text-xs ">{subtitle}</span>
        <h1 className="text-3xl text-secundaria font-display font-bold leading-tight md:text-4xl"> {title} </h1>
    </div>
  )
}