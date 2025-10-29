import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getOneTask(id){
  const task = await taskRepository.findOne(id);
  if(!task){
    const error = new Error(`There is no task with id ${id}`);
    error.status = 404;
    throw error;
  }
  return task;
}