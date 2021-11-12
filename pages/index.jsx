//React
import { useState } from "react";
import Head from 'next/head';

//Functions
import getRandomNumberBetween from '../functions/getRandomNumberBetween';


const Home = () => {
  let [usersChoice, setUsersChoice] = useState('');
  let [cpusChoice, setCpusChoice] = useState('');
  const choices = ['rock', 'paper', 'scissors'];

  const handlerClick = value => {
    const cpuChoice = getRandomNumberBetween(0, 2);
    const realCpuChoice = choices[cpuChoice];
		setUsersChoice(value);
    setCpusChoice(realCpuChoice);
	};

  return (
    <div className='container'>
      <Head>
        <title>Rock, Paper & Scissors</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section className='title_content'>
          <h1 className='title'>
            Rock, Paper & Scissors
          </h1>
          <div className="image_content">
              <img src='/rock-paper-scissors.svg' alt='Rock' className='rock' />
            </div>
        </section>

        <section className='grid'>
          <div className='card' onClick={() => handlerClick(choices[0])}>
            <div className="image_content">
              <img src='/rock.svg' alt='Rock' className='rock' />
            </div>
            <h3>Rock</h3>
          </div>

          <div className='card' onClick={() => handlerClick(choices[1])}>
            <div className="image_content">
              <img src='/paper.svg' alt='Paper' className='paper' />
            </div>
            <h3>Papper</h3>
          </div>

          <div className='card' onClick={() => handlerClick(choices[2])}>
            <div className="image_content">
              <img src='/scissors.svg' alt='Scissors' className='scissors' />
            </div>
            <h3>Scissors</h3>
          </div>
        </section>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by <img src='/vercel.svg' alt='Vercel' className='logo' />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title_content .title {
          margin: 0 0 1rem;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .title_content .image_content {
          display:flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .title_content .image_content img {
          width: 250px;
          height: 250px;
        }

        .grid {
          display: flex;
          align-content: center;
          justify-content: center;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1rem;
          text-align: center;
          text-decoration: none;
          border: 1px solid #545050;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor:pointer;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          color: #545050;
        }

        .card:hover h3,
        .card:focus h3,
        .card:active h3 {
          color: #0070f3;
        }

        .card .image_content {
          display:flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #000;
          margin-bottom: 1rem;
        }

        .card:hover .image_content,
        .card:focus .image_content,
        .card:active .image_content {
          border: 1px solid #0070f3;
        }

        .card .image_content img {
          width: 100px;
          height: 100px;
          transform: rotate(45deg);
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Home;
