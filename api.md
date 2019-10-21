## Get list todo

```js
api.getTodos({
  keyword: "some keyword", // string | undefined
  status: "done" // `done` | `pending` | undefined
});
```

## Create todo

```js
    api.createTodo({
        title: 'todo title',
        content: 'todo content
    })
```

## Update todo

```js
    api.updateTodo(todoId, {
        title: 'todo title',
        content: 'todo content,
        status: 'done'
    })
```

## Delete todo

```js
api.deleteTodo(todoId);
```
