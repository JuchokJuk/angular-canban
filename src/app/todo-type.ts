import { todoItem } from './todo-item';
export interface TodoType{
    id: number,
    title: string,
    items: todoItem[]
}