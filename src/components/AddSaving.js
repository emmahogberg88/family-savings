import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Wrapper, HeadingOne, HeadingTwo } from '../styles/GlobalStyles'

export const AddSaving = () => {
	const [saved, setSaved] = useState(0)
	const [totalSum, setTotalSum] = useState(0)
	const [doubleMoney, setDoubleMoney] = useState(false)
	const [category, setCategory] = useState('')

	const [totalRecyle, setTotalRecyle] = useState(0)
	const [totalStuff, setTotalStuff] = useState(0)
	const [totalGift, setTotalGift] = useState(0)
	const [totalEarned, setTotalEarned] = useState(0)
	const [totalOther, setTotalOther] = useState(0)
	console.log(totalRecyle, totalStuff, totalGift, totalEarned, totalOther)
	console.log('total saved', saved)
	console.log('kat', category)

	const savingCategory = ['Choose', 'Recycle bottles', 'Sold stuff', 'Got a gift', 'Earned it', 'Other']

	const handleSubmit = (e) => {
		e.preventDefault()
		doubleMoney ? setTotalSum((prev) => prev + saved * 3) : setTotalSum((prev) => prev + saved)
		console.log('total summa', totalSum)
		setSaved('')
	}

	const savingsData = useSelector((state) => state.savings)
	console.log(savingsData)

	return (
		<>
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<HeadingOne>Add new saving</HeadingOne>
					<Label>
						<HeadingTwo>Amount of money saved</HeadingTwo>
						<input
							type='number'
							name='amountSaved'
							min='1'
							onChange={(e) => setSaved(e.target.valueAsNumber)}
						/>
					</Label>
					<Label>
						<HeadingTwo>Money earned from</HeadingTwo>
						<select>
							{savingCategory.map((category, index) => (
								<option key={index} value={category} onChange={() => setCategory(category)}>
									{category}
								</option>
							))}
						</select>
					</Label>
					<Label>
						<HeadingTwo>Double up from parents?</HeadingTwo>
						<div>
							<input type='radio' value='yes' name='doubleMoney' onClick={() => setDoubleMoney(true)} />
							yes
							<input type='radio' value='no' name='doubleMoney' />
							no
						</div>
					</Label>
					<button type='submit'>Start saving some money</button>
				</form>

				<div>
					<h1>{savingsData.goalActivity}</h1>
					<h2>{savingsData.goalDate}</h2>
					<h2>{savingsData.totalSum} kr</h2>
					<h2>{totalSum} kr</h2>
					<h2>{savingsData.totalSavings}</h2>
				</div>
			</Wrapper>
		</>
	)
}

const Label = styled.label`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 1em;
`
