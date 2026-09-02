
export default function SectionHeading({ title, subtitle, lede, invert = false }: { title: string; subtitle: string; lede?: string; invert?: boolean }) {
  return (
    <div className="max-w-2xl mb-3">
        <span className={`text-xs font-semibold ${invert ? "text-teal-300" : "text-teal-600"}`}>{subtitle}</span>
        <h1 className={`mt-1 font-display text-3xl font-bold leading-tight md:text-4xl ${
          invert ? "text-fog-50" : "text-navy-950"
        }`}> {title} </h1>
        {lede && (
          <p className={`mt-4 text-base ${invert ? "text-fog-300" : "text-navy-900/75"}`}>
            {lede}
          </p>
        )}
    </div>
  )
}