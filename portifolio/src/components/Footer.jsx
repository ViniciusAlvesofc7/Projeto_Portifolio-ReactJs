import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-16 bg-gray-900 flex justify-center items-center gap-6'>
        <span className='text-white text-[0.8rem]'>© 2025 Vinicius Alves. Todos os direitos reservados.</span>
        <a href="https://github.com/ViniciusAlvesofc7/Projeto_Portifolio-ReactJs/tree/main/portifolio" className='text-cyan-600 text-[0.8rem] hover:text-white transition-all duration-300 hover:rotate-4'>Ver Código</a>
    </footer>
  )
}

export default Footer
