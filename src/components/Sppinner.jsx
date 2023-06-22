import Spinner from 'react-bootstrap/Spinner';

function BasicExample({value}) { 
  console.log(value)
  return (
    <Spinner animation="border" role={value.toString()}  className={`${value ===true? 'd-block ': 'd-none'}`} >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;