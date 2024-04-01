import React from 'react'
import { withTranslation } from 'react-i18next'
import Select from 'react-select'
import { Tab } from '@headlessui/react'
import CoverImage from './CoverImage'
import ComponentToImg from './ComponentToImg'
import RandomTheme from './RandomTheme'
import { ImgProvider } from '../utils/ImgContext'
import Header from './Header'
import theme1 from '../assets/images/theme1.webp'
import theme2 from '../assets/images/theme2.webp'
import theme3 from '../assets/images/theme3.webp'
import theme4 from '../assets/images/theme4.webp'
import theme5 from '../assets/images/theme5.webp'
import theme6 from '../assets/images/theme6.webp'
import theme7 from '../assets/images/theme7.webp'
import fixitIcon from '../assets/icons/fixit.svg'

const defaultSettings = {
  title: 'A begineers guide to frontend development',
  bgColor: '#949ee5',
  pattern: '',
  download: 'PNG',
  author: 'Lruihao',
  icon: { label: 'reactjs', value: 'react' },
  devIconOptions: [],
  font: 'font-Virgil',
  theme: 'background',
  customIcon: '',
  platform: 'hashnode',
}

const fontOptions = [
  'font-Anek',
  'font-Inter',
  'font-mono',
  'font-Poppins',
  'font-sans',
  'font-serif',
  'font-Virgil',
  'font-MMT',
]

const patternOptions = [
  'none',
  'graph-paper',
  'jigsaw',
  'hideout',
  'dots',
  'falling-triangles',
  'circuit-board',
  'temple',
  'anchors',
  'brickwall',
  'overlapping-circles',
  'wiggle',
  'tic-tac-toe',
  'leaf',
  'bubbles',
  'squares',
  'explorer',
  'jupiter',
  'sun',
]

const platformOptions = [
  { label: 'Hashnode', value: 'hashnode' },
  { label: 'Dev.to', value: 'dev' },
  { label: 'Hugo FixIt', value: 'hugo-fixit' },
  { label: 'Hexo Butterfly', value: 'hexo-butterfly' },
]

const themeOptions = [
  { name: 'background', src: theme7 },
  { name: 'basic', src: theme1 },
  { name: 'modern', src: theme2 },
  { name: 'stylish', src: theme3 },
  { name: 'outline', src: theme5 },
  { name: 'preview', src: theme4 },
  { name: 'mobile', src: theme6 },
]

const devIconsUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/devicon.json'
class Editor extends React.Component {
  state = defaultSettings

  componentDidMount() {
    const defaultDevIconOptions = [
      { label: this.props.t('editor.custom'), value: 'custom'},
      { label: 'Hugo FixIt', value: 'hugo-fixit' },
    ]
    this.setState({ devIconOptions: defaultDevIconOptions })
    fetch(devIconsUrl)
      .then((r) => r.json())
      .then((data) => {
        this.setState({ devIconOptions: [
          ...defaultDevIconOptions,
          ...data.map((icon) => ({ label: icon.altnames[0] ?? icon.name, value: icon.name })),
        ]})
      })
  }

  handleSelectPlatform = (e) => {
    this.setState({ platform: e.target.value })
    if (e.target.value === 'hugo-fixit') {
      this.setState({ icon: { label: 'Hugo FixIt', value: 'hugo-fixit' }})
    }
  }

  handleReset = () => {
    this.setState({
      ...defaultSettings,
      // 不重置 devIconOptions，因为它是从网络获取的
      devIconOptions: this.state.devIconOptions,
    })
  }

  getRandomTheme = (theme, Pattern) => {
    this.setState({ bgColor: theme.bgColor, borderColor: theme.bdColor, pattern: Pattern })
  }

  formatOptionLabel = ({ value, label }) => (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      <div className="ml-auto mr-2">
        {
          value === 'hugo-fixit' ? (
            <img alt="Hugo FixIt theme" className="w-6 h-6" src={fixitIcon} />
          ) : (
            <i className={`devicon-${value}-plain dev-icon text-2xl`} />
          )
        }
      </div>
    </div>
  )

  render() {
    const { t } = this.props

    return (
      <div className="flex flex-col h-full">
        <Header />

        <ImgProvider>
          <div className="flex flex-col lg:flex-row grow bg-gray-50">
            <div className="lg:w-1/3 bg-white flex flex-col">
              <Tab.Group>
                <div className="h-full flex md:flex-row flex-col">
                  <Tab.List className="bg-white md:p-0 p-2 flex flex-row md:flex-col">
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

                    <Tab className="flex items-center   font-semibold    text-lg">
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
                  </Tab.List>

                  <Tab.Panels className="bg-white border-l w-full p-4">
                    <Tab.Panel>
                      <div className="m-2 flex flex-col">
                        <span className="font-medium pb-1">{t('editor.title')}</span>
                        <textarea
                          className="focus:outline-none border text-gray-700 text-xl rounded p-2 h-24"
                          placeholder="Enter title here"
                          type="text"
                          value={this.state.title}
                          onChange={(e) => this.setState({ title: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col m-2">
                        <span className="font-medium pb-1">{t('editor.author')}</span>
                        <input
                          className="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2"
                          placeholder="Author"
                          type="text"
                          value={this.state.author}
                          onChange={(e) => this.setState({ author: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col m-2">
                        <span className="font-medium pb-1">{t('editor.icon')}</span>
                        <Select
                          className="outline-none focus:outline-none text-xl text-gray-700"
                          formatOptionLabel={this.formatOptionLabel}
                          options={this.state.devIconOptions}
                          value={this.state.icon}
                          onChange={(selectedOption) => this.setState({ icon: selectedOption, customIcon: ''})}
                        />
                      </div>

                      {this.state.icon.value === 'custom' &&
                        <div className="flex items-center justify-center m-2">
                          <input
                            className="focus:outline-none text-lg cursor-pointer bg-white rounded border"
                            type="file"
                            onChange={(e) => this.setState({ customIcon: URL.createObjectURL(e.target.files[0]) })}
                          />
                        </div>
                      }

                      <div className="flex items-center">
                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">{t('editor.font')}</span>
                          <select
                            className="focus:outline-none text-gray-700 text-xl p-2 rounded border"
                            value={this.state.font}
                            onChange={(e) => this.setState({ font: e.target.value })}
                          >
                            {
                              fontOptions.map((font) => (
                                <option key={font} value={font}>{font}</option>
                              ))
                            }
                          </select>
                        </div>
                        <div className="flex flex-col m-2 w-full">
                          <span className="font-medium pb-1">{t('editor.platform')}</span>
                          <select
                            className="focus:outline-none text-gray-700 text-xl p-2 rounded border"
                            value={this.state.platform}
                            onChange={this.handleSelectPlatform}
                          >
                            {
                              platformOptions.map((platform) => (
                                <option key={platform.value} value={platform.value}>{platform.label}</option>
                              ))
                            }
                          </select>
                        </div>
                      </div>

                      <div className={`flex items-center ${this.state.theme === 'background' ? 'hidden' : ''}`}>
                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">{t('editor.color')}</span>
                          <div className="border rounded flex items-center p-2">
                            <span className="text-xl text-gray-700 mx-2">{this.state.bgColor}</span>
                            <input
                              className="h-8 w-8 ml-auto mr-1 rounded"
                              type="color"
                              value={this.state.bgColor}
                              onChange={(e) => this.setState({ bgColor: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col m-2 w-1/2">
                          <span className="font-medium pb-1">{t('editor.pattern')}</span>
                          <select
                            className="focus:outline-none border text-xl p-2 rounded"
                            value={this.state.pattern}
                            onChange={(e) => this.setState({ pattern: e.target.value })}
                          >
                            {patternOptions.map((item) => (<option key={item}>{item}</option>))}
                          </select>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-2 md:gap-4 m-2">
                        <RandomTheme
                          className={this.state.theme === 'background' ? 'hidden' : ''}
                          onThemeChange={this.getRandomTheme}
                        />
                        <button
                          className="bg-gray-700 text-white rounded-lg text-lg font-semibold p-1 px-4 border"
                          onClick={this.handleReset}
                        >
                          <span>{t('editor.resetBtn')}</span>
                        </button>
                      </div>
                    </Tab.Panel>

                    <Tab.Panel className="h-full flex flex-col">
                      <div className="flex items-center justify-between border rounded-xl border-gray-50 px-4 py-2">
                        <h2 className="text-lg font-inter font-semibold">{t('editor.themes')}</h2>
                        <RandomTheme onThemeChange={this.getRandomTheme} />
                      </div>

                      <div className="h-full flex flex-wrap overflow-y-scroll">
                        {
                          themeOptions.map((theme) => (
                            <div
                              className={`${theme.name === 'background' ? 'w-full' : 'w-1/2'} p-2`}
                              key={theme.name}
                              title={theme.name}
                            >
                              <img
                                alt={theme.name}
                                className={`${this.state.theme === theme.name ? 'border-2 border-indigo-400 hover:border-indigo-500' : 'border border-gray-100 hover:border-gray-200'} cursor-pointer hover:scale-105 duration-300`}
                                src={theme.src}
                                onClick={(e) => this.setState({ theme: theme.name })}
                              />
                            </div>
                          ))
                        }
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>

              {/* <div className="mx-4 my-1">
            <h6>Download As</h6>
            <select onChange={(e) => this.setState({ download: e.target.value })}
              className="form-control input"
              value={this.state.download}>
              <option>PNG</option>
              <option>JPEG</option>
            </select>
          </div> */}
            </div>

            <ComponentToImg downloadAs={this.state.download}>
              <CoverImage {...this.state} />
            </ComponentToImg>
          </div>
        </ImgProvider>
      </div>
    )
  }
}

export default withTranslation()(Editor)
