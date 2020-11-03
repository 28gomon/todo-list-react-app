import React from 'react';

const List = () => {
	return (
		<ul className={ 'todo__sidebar-list' }>
			<li className={'active'}>
				<i className="fa fa-list-ul"/>
				<span>Все задачи</span>
			</li>
		</ul>
	)
};

export default List;