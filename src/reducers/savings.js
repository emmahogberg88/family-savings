import { createSlice } from '@reduxjs/toolkit'

const savings = createSlice({
	name: 'savings',
	initialState: {
		goalActivity: null,
		goalDate: null,
		totalSum: 0,
		savings: 0,
	},
	reducers: {
		setGoalActivity: (store, action) => {
			store.goalActivity = action.payload
		},
		setGoalDate: (store, action) => {
			store.goalDate = action.payload
		},
		setTotalSum: (store, action) => {
			store.totalSum = action.payload
		},
		setSavings: (store, action) => {
			store.savings = action.payload
		},
	},
})

export default savings
