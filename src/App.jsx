
import './App.css'
import React, {} from 'react'

function App() {
  const date = "2001-03-10";
  const agecalc = () => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    };
    return age;
  };
const realage = agecalc();
  return (
    <>
      <div>
        <h1 className='nombre'>Melanie Saraí Raquec Ramirez</h1>
        <h2 className='subtitle'>Estudiante de Ingeniería</h2>
        <p className='description'>
          Pues soy aprendiz todavia xd
        </p>
        <p className="description">
        Tengo <strong>{realage}</strong> años.
        </p>
      </div>
    </>
  )
}

export default App
