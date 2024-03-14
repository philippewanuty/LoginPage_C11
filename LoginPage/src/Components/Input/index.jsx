import { Container } from './styles';

export const Input = ({icon: Icon, ...rest}) => {
	return (
		<>
			<Container>
				<input {...rest} />
				
				{Icon && <Icon size={20} />}
			</Container>
		</>
	);
};
