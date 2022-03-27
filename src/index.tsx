/*
  IMPORTANT- Using Crusher (3 mins time)

  1.) Open `npx crusher-cli demo:test demo` in your terminal.

  2.) Create few test to try guesses, LIGHT, VAGUE AND APPLE. Save the test
      => Test UI or add assertion for flows

  3.) Uncomment line 21, this will introduce small bug in our code.
  4.) Run test again with `npx crusher-cli test:run demo`

  Do the same for your project :D to prevent bugs and issues.
  `npx crusher-cli test:create to create a test`
*/

import ReactDOM from 'react-dom'

import App from './App'
import { AlertProvider } from './context/AlertContext'

export let bugInThirdRow = false

// Unccoment next Line to Inroduce a bug.
// bugInThirdRow = true;

ReactDOM.render(
  <AlertProvider>
    <App />
  </AlertProvider>,
  document.getElementById('root')
)
