import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from  './CourseInput.module.css';


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] = useState(true) ; 
  const goalInputChangeHandler = event => {
    setIsValid(true)
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0 ){
      setIsValid(false) ; 
      return 
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.isValid}`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}
        placeholder={!isValid ? 'please Enter some notes' : ''} 
        value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
