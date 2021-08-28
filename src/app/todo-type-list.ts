import { TodoType } from './todo-type';

export const TODOTYPELIST: TodoType[] = [
    {
        id: 0,
        title: 'Нужно сделать',
        items: [{
            title: 'полить цветы',
            text: 'гибискус, гладиолус, геацинт'
        }, {
            title: 'покормить животных',
            text: 'кошку и собаку'
        }]
    },
    {
        id: 1,
        title: 'В разработке',
        items: [{
            title: 'сделать салат',
            text: 'цезарь'
        }]
    },
    {
        id: 2,
        title: 'Готово',
        items: []
    }
];