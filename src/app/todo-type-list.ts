import { TodoType } from './todo-type';

export const TODOTYPELIST: TodoType[] = [
    {
        id: 0,
        title: 'нужно сделать',
        items: [{
            title: 'полить цветы',
            text: 'гибискус, гладиолус, геацинт'
        }, {
            title: 'покормить животных',
            text: 'кошку и собаку'
        }]
    },
    {
        id: 0,
        title: 'в разработке',
        items: [{
            title: 'сделать салат',
            text: 'цезарь'
        }]
    }
];