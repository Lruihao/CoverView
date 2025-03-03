// https://github.com/vbenjs/vite-plugin-svg-icons/tree/main?tab=readme-ov-file#options
interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  prefix?: string
  color?: string
}

function SvgIcon({
  name,
  prefix = 'icon',
  color = 'currentColor',
  ...props
}: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`
  const className: string = props.className ? `coverview-svg-icon ${props.className}` : 'coverview-svg-icon'

  return (
    <svg {...props} className={className} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
