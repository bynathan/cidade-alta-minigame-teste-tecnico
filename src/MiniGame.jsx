/* Importing dependences */
import { useState } from 'react';
/* Importing components */
import Button from './components/button/Button'
import Characters from './components/characters/Characters'
import ProgressBar from './components/progress/ProgressBar'
/* Importing styles */
import './MiniGame.scss'
/* Importing images */
import crown from './assets/images/crown.png';
import border from './assets/images/border.png';

function MiniGame() {
  /* Value that defines which stage of the minigame will be visible */
  const [step, setStep] = useState('start');

  /* Function to success the game */
  const miniGameSuccess = () => {
    setStep('success');
  };

  /* Function to loser the game */
  const [loserText, setLoserText] = useState('Você falhou');
  
  const miniGameLoser = (textLoser) => {
    setStep('loser');
    setLoserText(textLoser);
  };

  /* Function to quit the game */
  const miniGameQuit = () => {
    setStep('start');
  };

  return (
    <main className='minigame'>
      <div className='dialog' role='dialog'>
        <img src={crown} alt="" />
        <img src={border} alt="" />
        <h1>mini-game</h1>

        {step == 'start' && (
          <section className='step-start'>
            <Button name='iniciar' onClick={() => setStep('game')}/>
          </section>
        )}

        {step === 'game' && (
          <section className='step-game'>
            <p>Pressione as teclas na ordem certa</p>
            <Characters successAction={miniGameSuccess} loserAction={miniGameLoser}/>
            <ProgressBar onProgressFinish={miniGameLoser}/>
          </section>
        )}

        {step === 'success' && (
          <section className='step-success'>
            <p>Sucesso!!</p>
            <div>
              <input type='button' value='sair' onClick={miniGameQuit}/>
              <input type='button' value='jogar novamente' onClick={() => setStep('game')} />
            </div>
          </section>
        )}

        {step === 'loser' && (
          <section className='step-loser'>
            <p>{loserText}</p>
            <Button name='tentar novamente' onClick={() => setStep('game')} />
          </section>
        )}
      </div>
    </main>
  )
}

export default MiniGame
