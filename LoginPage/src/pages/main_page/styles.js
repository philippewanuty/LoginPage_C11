import styled from 'styled-components';
import backgroundImg from '../../assets/images/ImagemCover.jpg';
import { Input } from '../../Components/Input';


export const Container = styled.div`
  display: flex;
`;
export const LadoEsquerdo = styled.div`
	background-color: ${({ theme }) => theme.COLORS.GRAY_50};
	width: 100%;
	height: 100vh;
	background-size: cover;

	> header {

		> img {
			width: 35px;
			height: 40px;
		}

    > h1 {
      font-size: 36px;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.GRAY_900};

      margin-left: 4px;
    }

		display: flex;
    align-items: center;
		width: 160px;
		height: 54px;

		margin: 40px 0 0 120px;
	}
`;

export const Acesso = styled.div`

display: flex;
flex-direction: column;

margin-left: 112px;
margin-top: 114px;

`;


export const Textos = styled.div`
	> h2 {
		font-size: 36px;
		font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_800};

    margin-bottom: 16px ;
	}

	> p {
		width: 350px;
		font-size: 16px;
		font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_600};

    margin-bottom: 40px;
	}
`;

export const Login = styled.div`
	> button {
		width: 384px;
		height: 56px;

		margin-top: 32px;
		margin-bottom: 32px;

		border-style: none;
		border-radius: 4px;

		background-color: ${({ theme }) => theme.COLORS.PURPLE};
		color: ${({ theme }) => theme.COLORS.WHITE};

		font-size: 16px;
		font-weight: 700;

		cursor: pointer;

		&:hover {
			background-color: ${({ theme }) => theme.COLORS.PURPLE2};
		}
	}
`;



export const Email = styled.div`
	> p {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 8px;
	}
 
`;

export const Senha = styled.div`
	display: flex;
	flex-direction: column;

	> div:nth-child(1){
		display: flex;
		justify-content: space-between;
		width: 384px;

		margin-top: 16px;
		margin-bottom: 8px;
		

		> p {
			font-size: 14px;
			font-weight: 600;
		}
		> a {
			font-size: 14px;
			font-weight: 600;
			text-decoration: none;
			color: ${({ theme }) => theme.COLORS.PURPLE};
		}
	}

	 
	
`;


export const Footer = styled.div`

  display: flex;


	> p {
		font-size: 16px;
		font-weight: 400;
		color: ${({ theme }) => theme.COLORS.GRAY_600};

    margin-right: 4px;
	}

	> a {
		font-size: 16px;
		font-weight: 700;
		color: ${({ theme }) => theme.COLORS.PURPLE};
		text-decoration: none;
	}
`;

export const LadoDireito = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${backgroundImg});
	background-size: cover;

`;
