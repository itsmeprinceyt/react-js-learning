import styles from './CSS_Module.module.css';
function Button(){
    return (
        <button className={styles.button}>Click Me</button>
    );
}

export default Button;