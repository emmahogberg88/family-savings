import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import savings from 'reducers/savings'

export const InputModal = () => {
	const [openModal, setOpenModal] = useState(true)

	const dispatch = useDispatch()

	const handleSubmit = () => {
		setOpenModal(false)
	}

	console.log(openModal)
	const savingsData = useSelector((state) => state.savings)

	return (
		<>
			<div>
				<form>
					<label>
						Activity
						<input
							type='text'
							name='activity'
							onChange={(e) => dispatch(savings.actions.setGoalActivity(e.target.value))}
						/>
					</label>
					<label>
						When is the goal planned to be scheduled?
						<input
							type='date'
							name='date'
							onChange={(e) => dispatch(savings.actions.setGoalDate(e.target.value))}
						/>
					</label>
					<label>
						How much money do you need to save?
						<input
							type='number'
							name='totalSum'
							onChange={(e) => dispatch(savings.actions.setTotalSum(e.target.value))}
						/>
					</label>
					<input type='submit' value='Start saving some money' onSubmit={handleSubmit} />
				</form>
			</div>

			<div>
				<h1>{savingsData.goalActivity}</h1>
				<h2>{savingsData.goalDate}</h2>
				<h2>{savingsData.totalSum} kr</h2>
			</div>
		</>
	)
}
