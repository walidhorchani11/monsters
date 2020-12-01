import React, { useState, useEffect } from 'react';

export const MonsterPropsRender = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    debugger;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => setData(users));
  }, []);

  return props.children({ data: data });
};

export default MonsterPropsRender;
