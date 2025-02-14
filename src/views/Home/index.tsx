import Footer from '@/components/Footer'
import Cover from './components/Cover'
import Header from './components/Header'
import Importance from './components/Importance'
import Supports from './components/Supports'
import Usage from './components/Usage'
import WallOfLove from './components/WallOfLove'

function Home() {
  return (
    <>
      <Header />
      <Cover />
      <Importance />
      <Usage />
      <Supports />
      <WallOfLove />
      <Footer />
    </>
  )
}

export default Home
