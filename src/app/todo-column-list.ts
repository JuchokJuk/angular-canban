import { TodoColumn } from './todo-column';

export const TODOCOLUMNLIST: TodoColumn[] = [
    {
        id: 0,
        title: 'Нужно сделать',
        items: [{id:0,
            title: 'полить цветы',
            text: 'гибискус, гладиолус, геацинт'
        }, {id:1,
            title: 'покормить животных',
            text: 'кошку и собаку'
        }]
    },
    {
        id: 1,
        title: 'В разработке',
        items: [{id:0,
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