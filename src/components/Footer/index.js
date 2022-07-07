import { FooterContainer, FooterBox, Ul, Link, H1 } from './style';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBox>
                <H1>Serviços</H1>
                <Ul>
                    <Link to="/">Privacidade e cookies</Link>
                    <Link to="/">Termos e condições</Link>
                    <Link to="/">Quem somos</Link>
                    <Link to="/">Contato</Link>
                </Ul>
            </FooterBox>
            <FooterBox>
                <H1>Para terapeutas</H1>
                <Ul>
                    <Link to="/">Seja nosso parceiro</Link>
                    <Link to="/">Cursos</Link>
                </Ul>
            </FooterBox>
            <FooterBox>
                <H1>Para você</H1>
                <Ul>
                    <Link to="/">Pesquise profissionais</Link>
                    <Link to="/">Faça cursos</Link>
                    <Link to="/">Perguntas frequentes</Link>
                </Ul>
            </FooterBox>
        </FooterContainer>
    )
}

export default Footer;