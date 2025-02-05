import styles from "./tags.module.scss";

export default function Tags({classes}) {
    return (
        <ul className={`${styles.ul} ${classes}`}>
            <li>Oog voor detail</li>
            <li>Figma</li>
            <li>Toegankelijkheid</li>
        </ul>
    )
}