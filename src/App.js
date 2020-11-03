import React from "react";
import { List } from "./components";

import './SCSS/app.scss';

function App() {
	return (
		<div className={ 'app' }>

			<div className={ 'todo' }>
				<div className={ 'todo__sidebar' }>

					<List/>

					<ul className={ 'todo__sidebar-list' }>
						<li>
							<i className="fa fa-circle"/>
							<span>Покупки</span>
						</li>

						<li>
							<i className="fa fa-circle"/>
							<span>Фильмы</span>
						</li>
					</ul>
				</div>

				<div className={ 'todo__tasks' }>
					tasks
				</div>
			</div>

		</div>
	);
}

export default App;
