export interface BoardModel {
  boardId: number;
  boardName: string;
  taskList: TaskModel[];
}

export interface TaskModel {
  taskId: number;
  taskName: string;
  taskContent: string;
}
