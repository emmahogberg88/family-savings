import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import savings from 'reducers/savings'
import { InputModal } from 'components/InputModal'

export const Overview = () => {
	const [openModal, setOpenModal] = useState(false)

	const dispatch = useDispatch()

	const handleSubmit = () => {
		setOpenModal((prev) => !prev)
	}

	const handleModal = () => {
		setOpenModal((prev) => !prev)
	}

	console.log(openModal)
	const savingsData = useSelector((state) => state.savings)

	return (
		<>
			<div>
				<form>
					<label>
						Add money
						<input
							type='text'
							name='activity'
							onChange={(e) => dispatch(savings.actions.setGoalActivity(e.target.value))}
						/>
					</label>
					<input type='submit' value='Start saving some money' onSubmit={handleSubmit} />
				</form>
			</div>

			<div>
				<h1>{savingsData.goalActivity}</h1>
				<h2>{savingsData.goalDate}</h2>
				<h2>{savingsData.totalSum} kr</h2>
				<button onClick={handleModal}>Edit activity</button>
			</div>
		</>
	)
}
