import { Tab, TabList } from '@headlessui/react'

function EditorNav() {
  return (
    <TabList className="bg-white md:p-0 p-2 flex flex-row md:flex-col">
      <Tab className="flex items-center font-semibold  ">
        <svg
          className="text-gray- bg-white w-12 m-2 h-12 p-2 rounded border"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z" />
        </svg>
      </Tab>

      <Tab className="flex items-center font-semibold text-lg">
        <svg
          className=" text-gray-800 bg-white w-12 h-12 p-2 m-2 rounded border"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.024 11.536 10 10l-2 3h9l-3.5-5z" />
          <circle cx="9.503" cy="7.497" r="1.503" />
          <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z" />
        </svg>
      </Tab>
    </TabList>
  )
}

export default EditorNav
