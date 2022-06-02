import { ReactNode } from 'react';
import './AppBody.css';

export interface AppBodyProps {
	children: ReactNode;
}

export const AppBody = (props: AppBodyProps) => {
	const { children } = props;

	return (
		<div className='app-body'>
			{children}
		</div>
	)
};
