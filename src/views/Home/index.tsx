import Cover from './components/Cover'
import Footer from './components/Footer'
import Header from './components/Header'
import Importance from './components/Importance'
import Supports from './components/Supports'
import Usage from './components/Usage'
import WallOfLove from './components/WallOfLove'

function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Cover />
      <div className="md:my-32 my-10 mx-auto">
        <Importance />
        <Usage />
        <Supports />
        <WallOfLove />
      </div>
      <Footer />
    </div>
  )
}

export default Home
