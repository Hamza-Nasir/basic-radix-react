import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Theme, Flex, Button, Text } from '@radix-ui/themes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Theme accentColor="blue" grayColor="sand" radius="large" scaling="95%">
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button>Let's go</Button>
        </Flex>
      </Theme>
    </div>
    
    </>
  )
}

export default App
