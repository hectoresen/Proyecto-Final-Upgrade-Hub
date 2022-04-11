import React from "react";
import '@testing-library/jest-dom/extend-expect'
import{render, screen}from '@testing-library/react'
import Register from './Register'
beforeEach(()=>{
  
})

test('render title component AddProduct',()=>{
  render(<Register/>)
  const title = screen.getByText(/Crear cuenta/i)
  expect(title).toBeInTheDocument()

})
test('render  form elements',()=>{
  render(<Register/>)

  //placeholdeer
  const inputContraseña = screen.queryByPlaceholderText(/Contraseña/i)
  expect(inputContraseña).toBeInTheDocument()
  const inputCorreo = screen.queryByPlaceholderText(/Correo electrónico/i)
  expect(inputCorreo).toBeInTheDocument()
//buttons
const buttonRegistrar = screen.queryByRole('button',{name:/Registrar/i})
expect(buttonRegistrar).toBeInTheDocument()


})
// test('',()=>{})

