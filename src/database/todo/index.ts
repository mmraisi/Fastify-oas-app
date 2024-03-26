export interface ITodo {
	id: string;
	name: string;
	description?: string;
}

import { v4 as uuidv4 } from "uuid";

export const todo: ITodo[] = [
	{
		id: uuidv4(),
		name: "item_1",
		description: "Description of item 1",
	},
	{
		id: uuidv4(),
		name: "item_2",
		description: "Description of item 2",
	},
	{
		id: uuidv4(),
		name: "item_3",
		description: "Description of item 3",
	},
];
