import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <>
                <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
            </>
            <div className='git'>
                <a href="https://github.com/cleiton-isaias" target="_blank">
                    <img src="/imagens/github.png" alt="Github de Cleiton Isaias" />
                </a>
            </div>
        </header >
    )
}