import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import ServiceInfo from '../components/serviceInfo';

const Services = () => {
  const [services, setServices] = useState([]);

  const updatePost = (name, phone, dueDate, idService) => {
    const servicesUrl = `/api/updateService`;
    const body = {id: idService, estimatedate: dueDate || "", name: name || "", phone: phone || "",};
    axios.post(servicesUrl, body)
    .then((res) => {
      setServices(res.data);
    })
  }
  useEffect(() => {
    const servicesUrl = `/api/getServices`;
    axios.get(servicesUrl).then((res) => {
      setServices(res.data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ECB Exam <code className={styles.code}>by Moises Rojas</code>
        </h1>

        <p className={styles.description}>
          Pending services:
        </p>

        <div className={styles.grid}>

          {services.length > 0 && (
              services.map(service => (
                <div className={styles.card}>
                  <ServiceInfo
                    caracteristicas={service}
                    onChangeStatus={(name, phone, dueDate, idService) => updatePost(name, phone, dueDate, idService)}
                  />
                </div>
              ))
            )
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Services;
