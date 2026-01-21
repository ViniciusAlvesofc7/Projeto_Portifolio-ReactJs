import { faEnvelope, faMobileScreenButton, } from '@fortawesome/free-solid-svg-icons'
import ContatoIcon from './Contato/ContatoIcon'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Contato = () => {
  return (
    <section className='w-full flex flex-col items-center pt-14 pb-40 px-6' id='contato'>
        <h2 className='text-white font-bold p-2 mb-16 text-2xl border-b-[2px] border-cyan-600'>Contato</h2>

        <div className='flex justify-center gap-8 w-full max-w-4xl'>
            <ContatoIcon icon={faEnvelope} text="E-mail" link="https://mail.google.com/mail/u/0/?fs=1&to=viniciusalvesofc7@gmail.com&su=Assunto&body=Mensagem&tf=cm"/>
            <ContatoIcon icon={faMobileScreenButton} text="Telefone" link="https://api.whatsapp.com/send?phone=5581986766881"/>
            <ContatoIcon icon={faLinkedinIn} text="Linkedin" link="https://www.linkedin.com/in/vinicius-alves-673a39270/"/>
            <ContatoIcon icon={faGithub} text="Github" link="https://github.com/ViniciusAlvesofc7"/>

        </div>
      
    </section>
  )
}

export default Contato
