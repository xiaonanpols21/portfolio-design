import styles from "./tags.module.scss";

export default function Tags({classes}) {
    return (
        <ul className={`${styles.ul} ${classes}`}>
            <li>Figma</li>
            <li>HTML, CSS, JS Skills</li>
            <li>Oog voor detail</li>
        </ul>
    )
}