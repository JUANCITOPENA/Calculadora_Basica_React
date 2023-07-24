// Importar las dependencias necesarias de React
import React, { useState } from 'react';
// Importar los estilos CSS para la aplicación
import './App.css';

// Definir el componente principal de la aplicación
function App() {
  // Declarar el estado del valor mostrado en la pantalla de la calculadora utilizando el hook useState de React
  const [displayValue, setDisplayValue] = useState('0');

  // Función para manejar el clic en un número
  const handleNumberClick = (number) => {
    // Comprobar si el valor actual en la pantalla es '0'
    if (displayValue === '0') {
      // Si es '0', reemplazarlo con el número seleccionado como una cadena
      setDisplayValue(number.toString());
    } else {
      // Si no es '0', concatenar el número seleccionado al valor actual en la pantalla
      setDisplayValue(displayValue + number);
    }
  };

  // Función para restablecer el valor de la pantalla a '0'
  const handleReset = () => {
    setDisplayValue('0');
  };

  // Función para calcular el resultado de la expresión matemática ingresada en la pantalla de la calculadora
  const handleCalculate = () => {
    try {
      // Validar la expresión ingresada antes de evaluarla
      const isValidExpression = /^[\d+\-*/. ]+$/.test(displayValue);

      // Comprobar si la expresión es válida
      if (isValidExpression) {
        // Si es válida, evaluarla y mostrar el resultado en la pantalla
        setDisplayValue(eval(displayValue).toString());
      } else {
        // Si no es válida, mostrar 'Error' en la pantalla
        setDisplayValue('Error');
      }
    } catch (error) {
      // Si ocurre un error en la evaluación, mostrar 'Error' en la pantalla
      setDisplayValue('Error');
    }
  };

  // Devolver el JSX que representa la interfaz de usuario de la calculadora
  return (
    <div className="app">
      {/* Título de la aplicación */}
      <h1>Uso de React JPV</h1>
      <div className="calculator">
        {/* Pantalla de la calculadora que muestra el valor actual */}
        <div className="display">{displayValue}</div>
        <div className="buttons">
          {/* Botones de la calculadora */}
          {/* Cada botón llama a la función correspondiente cuando se hace clic, pasando el valor del botón como argumento */}
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleNumberClick('+')}>+</button>
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleNumberClick('-')}>-</button>
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleNumberClick('*')}>*</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleNumberClick('.')}>.</button>
          <button onClick={() => handleCalculate()}>=</button>
          <button onClick={() => handleNumberClick('/')}>/</button>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
    </div>
  );
}

// Exportar el componente principal para que pueda ser utilizado en otros archivos
export default App;
