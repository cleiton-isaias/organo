import './Footer.css'

export const Footer = () => {
    // JSX
    return (
        <footer className='flex-container'>
            <div className="logosredes">
                <img className="fb" src="/imagens/fb.png" alt="Logo Facebook" />
                <img className="tw" src="/imagens/tw.png" alt="Logo Twiter" />
                <img className="ig" src="/imagens/ig.png" alt="Logo Instagram" />
            </div>
            <div className="logoorgano" >
                <img src="/imagens/logo.png" alt="Logo Organo" />
            </div>
            <div className="creditos">
                <span >Desenvolvido por Alura</span>
            </div>
        </footer>
    )
}