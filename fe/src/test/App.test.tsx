
import { render } from "@testing-library/react"
import App from "../App"

test('demo', () => {
  expect(true).toBe(true)
})

test("Renders the main page", () => {
  render(<App /> as React.ReactNode)
  expect(true).toBeTruthy()
});
