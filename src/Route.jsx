import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"


export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				
			</Routes>
		</BrowserRouter>
	)
}