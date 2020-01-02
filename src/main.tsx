import React from 'react';
import { Store } from 'redux';

import { ApplicationState } from './store';
import Routes from './Routes';

interface MainProps {
	store: Store<ApplicationState>;
}

const Main: React.FC<MainProps> = () => {
	return (
		<div>
			<Routes />
		</div>
	);
};

export default Main;
