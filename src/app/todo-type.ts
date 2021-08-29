import { TodoItem } from './todo-item';
export interface TodoType{
    id: number,
    title: string,
    items: TodoItem[]
}