import { Flex } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BodyContent from "./components/BodyContent"

const App = () => {
  return (
    <Flex
      height={'100vh'}
      backgroundColor={'black'}
      flexDirection={'column'}
      alignItems={{base: 'flex-start', md: 'center'}}
    >
      <Navbar />
      <BodyContent />
    </Flex>
  )
}

export default App
