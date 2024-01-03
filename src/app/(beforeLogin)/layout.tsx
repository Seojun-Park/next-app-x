import { ReactNode } from 'react';
import styles from '@/app/page.module.css';

type BeforeLoginLayoutType = {
  children: ReactNode;
  modal: ReactNode;
};
export default function Layout({ children, modal }: BeforeLoginLayoutType) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
