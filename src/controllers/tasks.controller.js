import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const Tasks = await Task.findAll();
    res.json(Tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const Task = await Task.findByPk(id);
    if (!Task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(Task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;
  await Task.findByPk(id);
  try {
    await Task.update(
      {
        name,
        priority,
        description,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(201).json('Task updated');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
