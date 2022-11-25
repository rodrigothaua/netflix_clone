import styles from './Banner.module.css'

function Banner() {

    return(
        <div>
            <div className={styles.banner}>
                <div className={`${styles.title} container`}>
                    <h2>Sugestões do dia</h2>
                </div>
            </div>
        </div>
    )
}

export default Banner