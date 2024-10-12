import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./TaskList.module.css";

interface Tasks {
	id: number;
	title: string;
	desc: string;
	editing: boolean;
}

interface TasksProp {
	tasks: Tasks[];
	onDelete: (id: number) => void;
	onEdit: (id: number) => void;
}

const TaskList:React.FC<TasksProp> = (props) => {
	const { tasks, onDelete, onEdit } = props

	return (
		<div className={ styles.container }>
			<h2>Task List</h2>
			<ul>
				{tasks.map((task) => (
          <li key={ task.id }>
						<TaskCard 
						  id={ task.id }
							title={ task.title } 
							desc={ task.desc } 
							editing={ task.editing }
							onDelete={ onDelete } 
							onEdit={ onEdit }
						/>
					</li>
        ))}
			</ul>
		</div>
	);
};

export default TaskList;
