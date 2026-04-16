import styles from './Button.module.css';

function Button({ href, children, variant = 'primary', onClick, type = 'button' }) {
  const className =
    variant === 'secondary'
      ? `${styles.button} ${styles.secondary}`
      : `${styles.button} ${styles.primary}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
