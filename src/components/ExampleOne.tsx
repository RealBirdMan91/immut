import React, { useState } from "react";

function ExampleOneComponent() {
  const [data, setData] = useState({
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
    },
    posts: [
      {
        id: 1,
        title: "Post 1",
        content: "Lorem ipsum dolor sit amet",
      },
      {
        id: 2,
        title: "Post 2",
        content: "Consectetur adipiscing elit",
      },
    ],
  });

  function updateData() {
    const newData = {
      ...data,
      user: {
        ...data.user,
        address: {
          ...data.user.address,
          zip: "67890",
        },
      },
      posts: data.posts.map((post) =>
        post.id === 1 ? { ...post, title: "Updated Post 1" } : post
      ),
    };

    setData(newData);
  }

  return (
    <div>
      <p>Name: {data.user.name}</p>
      <p>Zip Code: {data.user.address.zip}</p>
      <ul>
        {data.posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default ExampleOneComponent;
