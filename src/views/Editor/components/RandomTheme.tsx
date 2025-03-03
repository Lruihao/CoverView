import type { ColorTheme } from '@/types'
import SvgIcon from '@/components/SvgIcon'
import { getRandomTheme } from '@/services/themes'

export interface RandomThemeProps {
  className?: string
  onThemeChange?: (theme: ColorTheme, Pattern: string) => void
}

function RandomTheme({ className, onThemeChange }: RandomThemeProps) {
  const changeTheme = () => {
    const { theme, pattern } = getRandomTheme()
    onThemeChange?.(theme, pattern)
  }

  return (
    <div className={`flex flex-col justify-center ${className || ''}`}>
      <div
        className="shuffle-btn w-10 h-10 flex justify-center items-center shadow-xl shadow-gray-100 p-2 bg-indigo-400 rounded-xl cursor-pointer text-white text-2xl"
        onClick={changeTheme}
      >
        <SvgIcon name="random" />
      </div>
    </div>
  )
}

export default RandomTheme
