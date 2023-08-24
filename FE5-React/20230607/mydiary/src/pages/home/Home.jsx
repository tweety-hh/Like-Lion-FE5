import React from 'react';
import styles from './Home.module.css';
import DiaryForm from './DiaryForm';

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    <div className={styles.container}>
      <main className={styles['diary-main']}>
        <h2 className={styles.heart}>2023.02.27의 비밀일기</h2>
        <DiaryForm />
      </main>
      <section>
        <h2 className="a11y-hidden">일기 목록</h2>
        <ul></ul>
      </section>
    </div>
  );
}
