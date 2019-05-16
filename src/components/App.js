import React, { useState } from 'react';
import styles from './App.css';
import Sidebar from './Sidebar';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'Am home',
    about: 'about page',
    blog: 'no blog',
    contact: 'no contact'
  };

  return (
    <section className={styles.App}>
      <Sidebar>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );
}
