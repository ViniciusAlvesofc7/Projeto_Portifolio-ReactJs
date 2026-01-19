import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cards = (props) => {



  return (

    <section className="projetos-card flex flex-col justify-center items-center gap-2 w-60 bg-gray-900 rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer border-b-[2px] border-cyan-600">

      <img src={props.img} alt={props.alt} 
      className='w-full h-40 rounded-t-lg'/>
      <div className='p-2'>
        <h5 className='text-white font-bold text-xl mb-2'>{props.title}</h5>

        <div className='flex gap-1 justify-left mb-2'>
          {props.icon && props.icon.map((icon, index) => (
            <FontAwesomeIcon key={index}
              icon={icon}
              className="text-cyan-600 text-center text-lg"
            />
          ))}
        </div>

        <p className='text-white text-sm mb-4'>{props.text}</p>
        <div className='flex justify-evenly gap-2 mb-1'>
          <a href={props.link} target='_blank' className='w-24 h-10 flex justify-center items-center bg-cyan-800/80 text-white text-md rounded-xl border-[1px] border-cyan-600 hover:bg-cyan-600 transition-all duration-500 cursor-pointer'>Ver Mais</a>
          <a href={props.github} target='_blank' className='w-24 h-10 flex justify-center items-center bg-cyan-800/80 text-white text-md rounded-xl border-[1px] border-cyan-600 hover:bg-cyan-600 transition-all duration-500 cursor-pointer'>Ver Código</a>
        </div>
      </div>
    </section>
  )
}

export default Cards
