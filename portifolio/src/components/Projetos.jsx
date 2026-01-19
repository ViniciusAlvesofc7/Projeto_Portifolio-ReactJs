import Cards from './Cards/Cards'
import { faReact, faJs, faHtml5, faNodeJs, faCss3, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faWater } from "@fortawesome/free-solid-svg-icons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { use, useRef } from "react"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projetos = () => {

    const sectionRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".projetos-card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: true,
                markers: false,
                start: "top 80%",
                end: "bottom 85%",
            },
        });

        cards.forEach((card) => {
            tl.fromTo(
                card,
                {
                    opacity: 0,
                    y: 200,
                    x: 500,
                    rotate: 90,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    rotate: 0,
                    ease: "power3.out",
                    duration: 0.5,
                }
            );
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        }
    }, { scope: sectionRef });


    return (


        <section className="w-full overflow-hidden flex flex-col items-center justify-center px-6 pt-14 pb-40" id="projetos">
            <h2 className="text-white font-bold p-2 mb-16 text-2xl border-b-[2px] border-cyan-600">Projetos</h2>

            <div ref={sectionRef} className='flex gap-10 justify-center flex-wrap'> 
                <Cards
                    img="..\src\assets\image\projeto-barbearia.png"
                    alt="Barbearia"
                    title="Barbearia"
                    icon={[faHtml5, faCss3, faJs, faBootstrap]}
                    text="Uma landing page responsiva, desenvolvida para meios de estudos e aprendizagem da ferramenta Bootstrap."
                    link="https://viniciusalvesofc7.github.io/Projeto-Barbearia/"
                    github="https://github.com/ViniciusAlvesofc7/Projeto-Barbearia"
                />

                <Cards
                    img="..\src\assets\image\projeto-clinica.png"
                    alt="Clinica Odontológica"
                    title="Clinica Odontológica"
                    icon={[faHtml5, faCss3, faJs, faSass]}
                    text="Aplicação web que tem como objetivo consolidar os conhecimentos adquiridos em HTML, CSS, JavaScript e Sass."
                    link="https://viniciusalvesofc7.github.io/clinica-odontologica/"
                    github="https://github.com/ViniciusAlvesofc7/clinica-odontologica"
                />

                <Cards
                    img="..\src\assets\image\projeto-hamburgueria-tailwindcss.png"
                    alt="Hamburgueria"
                    title="Hamburgueria"
                    icon={[faHtml5, faCss3, faJs, faWater]}
                    text="Sistema de Pedidos de Hamburgueria, desenvolvido com TailwindCSS e JavaScript, para fins de estudo."
                    link="https://viniciusalvesofc7.github.io/Projeto-hamburgueria-tailwindcss/"
                    github="https://github.com/ViniciusAlvesofc7/Projeto-hamburgueria-tailwindcss"
                />
            </div>


        </section>
    )
}

export default Projetos
