import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../config/apiconfig";
import styles from "../styles/viewer.module.css";

const Viewer = () => {
    const newsId = document.location.search.split("?id=")[1]
    const [news, setNews] = useState(null)
    useEffect(() => {
        axios.get(`${config.API_CONFIG}/articles/${newsId}`).then((res) => {
            console.log(res.data.data)
            setNews(res.data.data)
        })
    }, [])

    return news ? (
        <div className={styles.appBackground}>
            <div className={styles.cardContainer}>
                <h1>#{news.keyword}</h1>

                <div className={styles.videoAndListContainer}>
                    <div className={styles.videoElement}>
                        <video
                            controls={true}
                            src={`${config.API_CONFIG}/articles/${news.id}/video`} />
                    </div>
                    <div className={styles.listElement}>
                        {news.articleTitles.map((article) => {
                            return (
                                <div className={styles.listItem}>
                                    <p>{article}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <h2 style={{ color: 'black' }}>Loading..</h2>
    )
}

export default Viewer