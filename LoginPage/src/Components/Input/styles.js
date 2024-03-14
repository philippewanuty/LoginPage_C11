import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	width: 384px;

	border-style: solid;
	border-width: 1px;
	border-radius: 4px;
	border-color: ${({ theme }) => theme.COLORS.GRAY_200};

	&:hover {
		border-color: ${({ theme }) => theme.COLORS.PURPLE};
	}

	&:focus-within {
		outline: 1px solid blue; /* Define a cor e a largura do contorno quando precionado*/
	}

	background-color: ${({ theme }) => theme.COLORS.WHITE};

	padding: 15px 10px 15px 10px;

	svg {
		color: ${({ theme }) => theme.COLORS.GRAY_400};
		cursor: pointer;
	}

	> input {
		width: 100%;

		border-style: none;
		outline: none;

		&::placeholder {
			font-size: 14px;
			font-weight: 400;
			color: ${({ theme }) => theme.COLORS.GRAY_400};
		}
	}
`;

