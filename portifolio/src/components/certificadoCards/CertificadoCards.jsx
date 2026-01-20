
const CertificadoCards = (props) => {
    return (
        
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="certificado-card w-38 md:w-40 lg:w-40 flex flex-col items-center bg-gray-900 rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer border-b-[2px] border-cyan-600 ">
            <img src={props.imgSrc} alt={props.altText} className="w-full rounded-t-lg"/>
            <div className="p-2 text-center">
                <p className="text-white font-bold">{props.title} </p>
                <span className="text-sm text-cyan-200 font-normal">{props.instituicao}</span>
                <p className="text-cyan-600 text-sm mt-2">Duração: <span className="text-gray-200">{props.duracao}</span> </p>
            </div>
        </a>

    )
}

export default CertificadoCards
