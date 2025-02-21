import type { ColorTheme } from '@/types'
import { getRandomTheme } from '@/services/themes'

function RandomIcon() {
  return (
    <svg
      className="text-white w-10 h-10"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z" />
      <path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z" />
    </svg>
  )
}

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
        className="shuffle-btn w-10 h-10 flex justify-center items-center shadow-xl shadow-gray-100 p-2 bg-indigo-400 rounded-xl cursor-pointer"
        onClick={changeTheme}
      >
        <RandomIcon />
      </div>
    </div>
  )
}

export default RandomTheme
