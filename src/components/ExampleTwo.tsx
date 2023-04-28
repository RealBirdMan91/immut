import React, { useState } from "react";

const initialData = [
  {
    id: 1,
    name: "Item 1",
    subItems: [
      {
        id: "1.1",
        name: "Subitem 1.1",
      },
      {
        id: "1.2",
        name: "Subitem 1.2",
      },
    ],
  },
  {
    id: 2,
    name: "Item 2",
    subItems: [
      {
        id: "2.1",
        name: "Subitem 2.1",
      },
      {
        id: "2.2",
        name: "Subitem 2.2",
      },
    ],
  },
];

const ExampleTwo = () => {
  const [data, setData] = useState(initialData);

  const handleUpdate = (id: number, subId: string, newName: string) => {
    const newData = data.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        subItems: item.subItems.map((subItem) => {
          if (subItem.id !== subId) {
            return subItem;
          }

          return {
            ...subItem,
            name: newName,
          };
        }),
      };
    });

    setData(newData);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          {item.subItems.map((subItem) => (
            <div key={subItem.id}>
              <p>{subItem.name}</p>
              <button
                onClick={() => handleUpdate(item.id, subItem.id, "New Name")}
              >
                Update Subitem Name
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExampleTwo;
