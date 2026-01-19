import CertificadoCards from "./certificadoCards/certificadoCards"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Certificados = () => {

  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".certificado-card",{
      y: -60,            // vem de cima
      opacity: 0,
    }, {
      y: 60,            // vem de baixo
      opacity: 1,       // fade
      stagger: 0.5,    // efeito em cascata
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%", // quando a seção entra
        end: "bottom 70%", // quando a seção sai
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <div className="w-full flex flex-col items-center pt-10 pb-30 px-6" id="certificados">
        <h1 className="text-white font-bold p-2 mb-16 text-2xl border-b-[2px] border-cyan-600">Certificados</h1>

        <div ref={sectionRef} className="flex flex-wrap justify-center gap-2 p-4">
            <CertificadoCards 
            link="https://cursos.dankicode.com/api/certificados/464468e5-fccb-49d0-8364-ccd4f976f033"
            imgSrc="\src\assets\image\curso_React_dankiCode.png" altText="Certificado React - DankiCode" title="Curso React Js" instituicao="DankiCode" duracao=" 4 horas"/>
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/5f781953-bcbd-4daf-8a7a-11cb08a03bcc"
            imgSrc="\src\assets\image\curso_JavaScript_dankiCode.png" altText="Certificado JavaScript - DankiCode" title="Curso JavaScript" instituicao="DankiCode" duracao=" 14 horas"
            />
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/3c199897-2356-484e-9c6d-c548e1730a7e"
            imgSrc="\src\assets\image\curso_Vuejs_dankiCode.png" altText="Certificado Vue js - DankiCode" title="Curso Vue Js" instituicao="DankiCode" duracao=" 5 horas"
            />
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/66b91974-248c-4f93-afee-c1e5e0df6ae9"
            imgSrc="\src\assets\image\curso_Java_dankiCode.png" altText="Certificado Java Desktop - DankiCode" title="Curso Java Desktop" instituicao="DankiCode" duracao=" 9 horas"
            />
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/43d01dff-78d7-4b30-80b3-8ce366d0ccec"
            imgSrc="\src\assets\image\curso_Frontend_dankiCode_02.png" altText="Certificado Front-End 2.0 - DankiCode" title="Curso Front-End 2.0" instituicao="DankiCode" duracao=" 9 horas"
            />
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/8b2cd6b9-88e7-42bd-bc94-d95fcb975d33"
            imgSrc="\src\assets\image\curso_Typescript_express_dankiCode.png" altText="Certificado Typescript Express - DankiCode" title="Curso Typescript Express" instituicao="DankiCode" duracao=" 2 horas"
            />
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/e493e626-4a5c-4366-b016-d2ebd3daea69"
            imgSrc="\src\assets\image\curso_Webmaster_frontend_dankiCode.png" altText="Certificado Webmaster Front-End - DankiCode" title="Curso Webmaster Front-End" instituicao="DankiCode" duracao=" 83 horas"
            />
            <CertificadoCards
            link="https://cursos.dankicode.com/api/certificados/b50a4c8f-1ca0-47ff-857f-a048daed8601"
            imgSrc="\src\assets\image\curso_logica_dankiCode.png" altText="Certificado Logica de Programação - DankiCode" title="Curso Logica de Programação" instituicao="DankiCode" duracao=" 5 horas"
            />
        </div>
    </div>
  )
}

export default Certificados
