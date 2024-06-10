import Render from "../render";

const State = {
    listToDo: {
        title: "To Do",
        list: [
            {
                state: "todo",
                text: "Собирать",
            },
            {
                state: "todo",
                text: "Собирать",
            },
            {
                state: "todo",
                text: "Собирать",
            },
        ],
    },

    listDoing: {
        title: "Doing",
        list: [
            {
                state: "doing",
                text: "Собираю",
            },
            {
                state: "doing",
                text: "Собираю",
            },
            {
                state: "doing",
                text: "Собираю",
            },
        ],
    },
    listCompleted: {
        title: "Completed",
        list: [
            {
                state: "complete",
                text: "Собрал",
            },
            {
                state: "complete",
                text: "Собрал",
            },
            {
                state: "complete",
                text: "Собрал",
            },
        ],
    }
}

export const addTaskInToDo = (text) => {
    State.listToDo.list.push(text);

    Render(State);
}

export const addTaskInDoing = (text,i) => {
    State.listDoing.list.push({
        state: "doing",
        text: text,
    });
    delete State.listToDo.list[i];

    Render(State);
}

export const addTaskInComplete = (text,i) => {
    State.listCompleted.list.push({
        state: "complete",
        text: text,
    })
    delete State.listDoing.list[i];
    Render(State);
}

export default State;