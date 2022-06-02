import { ReactNode } from 'react';
import './Layout.css';

/**
 * TYPESCRIPT: An interface is a Typescript concept which describes the properties an object has.
 * As a general rule, I use the format `<ComponentName>Props` to denote that this interface describes
 * what props the component "ComponentName" accepts.
 * 
 * Doing this has two benefits:
 * (a) Typescript will not let you compile your app if you accidentally pass the wrong type of props in
 * (b) When you come back to this component later, you won't be as confused about what props a component takes
 */
export interface LayoutProps {
	children: ReactNode; // This means the component can be used with children e.g. `<Layout> <div>This div will appear</div> </Layout>`
}

export const Layout = (props: LayoutProps) => {
	const { children } = props; // SYNTAX: This is called an "object destructuring assignment." As a rule, I use this to extract props

	return (
		<div className='app-layout'>
			{children}
		</div>
	)
};
