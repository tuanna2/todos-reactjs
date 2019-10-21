Dùng ReactJS, Redux thực hiện các yêu cầu sau:

1. Fork sandbox này để implement một ứng dụng todo list đơn giản gồm các chức năng sau:

- Show todo list
- Search todo. Cache kết quả search, không gọi lại api nếu keyword đã được search trước đó
- Filter todo theo status. Cache kết quả filter
- Create, update, delete todo
- back to top button:
  - Chỉ hiện khi todo list dài hơn viewport
  - Tự động ẩn khi scroll lên đầu list

2. Fork sandbox ở bài 1 để sửa lại theo yêu sau:

- Viết một HOC function tên là `withScroll` để truyền scroll state cho `ListTodo` component. VD:

```
const ListTodo = ({ scroll }) => {
  // scroll = {x: 0, y: 0}
}
withScroll(ListTodo);
```

3. Fork sandbox ở bài 1 hoặc 2 để sửa lại theo yêu cầu sau:

- Dùng custom hook để tái sử dụng đoạn code xử lí scroll. VD:

```
  const [x, y] = useScroll();
```

NOTE: chỉ được thêm, sửa file bên trong folder editable

Nội dung bài làm bao gồm 3 link sandbox tương ứng với 3 bài 1, 2, 3 gửi mail lại cho HR.
