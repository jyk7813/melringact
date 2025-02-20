import { Color, Size, Weights } from '../../constants/type'

interface ButtonsProps {
  text: string
  color?: Color
  size?: Size
  weight?: Weights
  onClick: () => void
}

const Buttons = ({
  text,
  color = 'primary',
  size = 'md',
  weight = '400',
  onClick,
}: ButtonsProps) => {
  const colors = {
    primary:
      'bg-purple-400 text-white hover:bg-purple-500 focus:bg-purple-600 active:bg-purple-700',
    secondary:
      'bg-white border border-purple-400 text-black hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-300',
    success: 'bg-green-400 text-white hover:bg-green-500 focus:bg-green-600',
    danger: 'bg-red-400 text-white hover:bg-red-500 focus:bg-red-600',
    warning: 'bg-yellow-300 text-white hover:bg-yellow-400 focus:bg-yellow-500',
    info: 'bg-blue-400 text-white hover:bg-blue-500 focus:bg-blue-600',
  }

  const sizes = {
    sm: 'h-12 text-xl px-8',
    md: 'h-18 text-2xl px-10',
    lg: 'h-20 text-3xl px-12',
  }

  const weights = {
    '400': 'font-normal',
    '500': 'font-medium',
    '600': 'font-bold',
  }

  return (
    <button
      className={`${colors[color]} ${sizes[size]} ${weights[weight]} rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Buttons
