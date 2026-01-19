const ModalMenu = ({ isOpen, setOpenMenu }) => {

    const closeAndScroll = (id) => {
        setOpenMenu(false);
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed w-full h-full z-50 bg-black/80 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center justify-center text-white gap-4 mt-[-8rem]">
                <h2 className="text-cyan-600 mb-10 text-4xl font-semibold">
                    Menu
                </h2>

                <button onClick={() => closeAndScroll("sobre")} className="btn-menu">
                    Sobre
                </button>
                <button onClick={() => closeAndScroll("skills")} className="btn-menu">
                    Skills
                </button>
                <button onClick={() => closeAndScroll("projetos")} className="btn-menu">
                    Projetos
                </button>
                <button onClick={() => closeAndScroll("certificados")} className="btn-menu">
                    Certificados
                </button>
                <button onClick={() => closeAndScroll("contato")} className="btn-menu">
                    Contato
                </button>
            </nav>
        </div>
    );
};

export default ModalMenu;