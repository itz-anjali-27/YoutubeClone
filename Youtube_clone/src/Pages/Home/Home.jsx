import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/sildebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

export default function Home({ sidebar }) {

  const [category, setCategory] = useState(0);
  
  return (
    <>

      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}></Sidebar>
      <Feed category={category} setCategory={setCategory} />

    </>
  );
}
