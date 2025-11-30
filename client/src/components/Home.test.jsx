import { render, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home component', () => {
  test('renders the welcome heading', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const heading = screen.getByText(/Hi, I’m Kaylie/i)
    expect(heading).toBeInTheDocument()
  })
})