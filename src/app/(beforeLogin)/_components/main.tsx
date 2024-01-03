import Image from 'next/image';
import styles from '@/app/page.module.css';
import logo from '../../../../public/logo.png';
import Link from 'next/link';

export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={logo}
          alt='logo'
          width={300}
          height={300}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className={styles.right}>
        <h1>{`What's happening?`}</h1>
        <h2>Sign up now</h2>
        <Link
          href='/i/flow/signup'
          className={styles.signup}>
          Sign up
        </Link>
        <h3>Already have an account?</h3>
        <Link
          href='/login'
          className={styles.login}>
          Login
        </Link>
      </div>
    </div>
  );
}
