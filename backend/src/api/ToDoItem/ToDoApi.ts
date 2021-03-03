import { RequestHandler } from 'express';
import { getConnection, getManager } from 'typeorm';
import ToDoItem from '../../entity/ToDoItem';

export const addItem = async (req, res): RequestHandler => {
  try {
    const { title, description } = req.params || '';

    await getManager()
      .createQueryBuilder()
      .insert()
      .into(ToDoItem)
      .values([
        {
          title,
          description,
          isChecked: false,
          isPinned: false,
        },
      ])
      .execute();

    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
};

export const deleteItem = async (req, res): RequestHandler => {
  try {
    const targetId = parseInt(req.params.id, 10);
    await getManager()
      .createQueryBuilder()
      .delete()
      .from(ToDoItem)
      .where('id = :id', { id: targetId })
      .execute();
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
};

export const pinItem = async (req, res): RequestHandler => {
  try {
    const targetId = parseInt(req.params.id, 10);

    const item = await getConnection()
      .createQueryBuilder()
      .select('item')
      .from(ToDoItem, 'item')
      .where('item.id = :id', { id: targetId })
      .getOne();

    await getManager()
      .createQueryBuilder()
      .update(ToDoItem)
      .set({ isPinned: !item.isPinned })
      .where('id = :id', { id: targetId })
      .execute();
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
};

export const checkItem = async (req, res): RequestHandler => {
  try {
    const targetId = parseInt(req.params.id, 10);

    const item = await getConnection()
      .createQueryBuilder()
      .select('item')
      .from(ToDoItem, 'item')
      .where('item.id = :id', { id: targetId })
      .getOne();

    await getManager()
      .createQueryBuilder()
      .update(ToDoItem)
      .set({ isChecked: !item.isChecked })
      .where('id = :id', { id: targetId })
      .execute();
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
};

export const getList = async (req, res): RequestHandler => {
  try {
    const items = await getManager()
      .createQueryBuilder()
      .select('item')
      .from(ToDoItem, 'item')
      .orderBy('item.isPinned', 'DESC')
      .addOrderBy('item.isChecked', 'ASC')
      .getMany();
    res.send(items);
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    return res.status(400).end();
  }
};
