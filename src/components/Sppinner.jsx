import Spinner from 'react-bootstrap/Spinner';

function BasicExample({value}) {    
  return (
    <Spinner animation="border" role={value}  className={`${value===true? 'd-block ': 'd-none'}`} >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;