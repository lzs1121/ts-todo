import { Store, createStore, applyMiddleware } from 'redux';

import { createRootReducer, ApplicationState } from './store';

export default function configureStore(
	initialState: ApplicationState
): Store<ApplicationState> {
	// const loggerUse = createLogger();

	const store = createStore(
		createRootReducer(),
		initialState,
		applyMiddleware()
	);

	return store;
}
