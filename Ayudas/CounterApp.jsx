import { useState  } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({valor}) => {
    const [ counter, setCounter ] = useState(valor);
    
    const handledAdd = (  ) => {
            setCounter( counter + 1);
    }

    const handledSub = (  ) => {
        setCounter( counter - 1);
    }

    const handledRes = (  ) => {
    setCounter( valor);
    }

    return (
      <>
          <h1> 'CounterAÑO' </h1>
          <h2> { counter } </h2>

          <button onClick={ handledAdd }>
            +1
          </button>
          <button onClick={ handledSub }>
            -1
          </button>
          <button aria-label='btn-reset' onClick={ handledRes }>
            Reset
          </button>

  
      </>
  
    )
  }

CounterApp.propTypes = {

    valor: PropTypes.number.isRequired,
    
}

CounterApp.defaultProps = {

valor: 0

}