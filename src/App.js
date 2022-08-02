import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import savings from './reducers/savings'
import { AddSaving } from 'components/AddSaving'
import { GlobalStyle } from './styles/GlobalStyles'

const reducer = combineReducers({
	savings: savings.reducer,
})

const persistedStateJSON = localStorage.getItem('cardReduxState')
let preloadedState = {}

if (persistedStateJSON) {
	preloadedState = JSON.parse(persistedStateJSON)
}

const store = configureStore({ reducer, preloadedState })

store.subscribe(() => {
	localStorage.setItem('cardReduxState', JSON.stringify(store.getState()))
})

// const store = configureStore({ reducer })

export const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<AddSaving />
		</Provider>
	)
}
