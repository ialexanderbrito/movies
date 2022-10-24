import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      <span>{props.children}</span>
    </button>
  );
}
