import { Container, LadoEsquerdo, Acesso, Textos, Login, Email, Senha, LadoDireito, Footer } from './styles';
import VertigoImg from '../../assets/images/Vector.svg';

export const MainPage = ({}) => {
	return (
		<>
			<Container>
				<LadoEsquerdo>
					<header>
						<img src={VertigoImg} alt='' />
						<h1>Wanuty</h1>
					</header>

					<Acesso>
						<Textos>
							<h2>Acesse a plataforma</h2>
							<p>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</p>
						</Textos>

						<Login>
							<Email>
								<p>E-mail</p>
								<input type='text' placeholder='Digite seu e-mail'/>
							</Email>
							<Senha>
								<div>
                  <p>Senha</p>
                  <a href=''>Esqueceu a senha?</a>
                </div>
								<input type='text' placeholder='Digite sua senha'/>
							</Senha>
							<button>Entrar</button>
							<Footer>
                <p>Ainda não tem uma conta?</p>
                <a href=''>Inscreva-se</a>
              </Footer>
						</Login>
					</Acesso>
				</LadoEsquerdo>

				<LadoDireito>
					<img src='' alt='' />
				</LadoDireito>
			</Container>
		</>
	);
};
