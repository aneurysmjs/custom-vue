import { afterEach, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'

expect.extend(matchers)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  // cleanup()
})
