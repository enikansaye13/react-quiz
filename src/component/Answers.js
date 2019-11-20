import React from 'react';
import Answer from './Answer';


function Answers(props){
    return(
        <div>
        <Answer letter ="a" 
        Answer={props.question.answer_a} 
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'a'} />
        <Answer letter="b" 
        Answer= {props.question.answer_b} 
        handleClick={props.handleClick}
        selected= {props.currentAnswer === 'b'} />
        <Answer letter="c" 
        Answer={props.question.answer_c} 
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'c'}/>
        <Answer letter="d" 
        Answer={props.question.answer_d} 
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'd'}/>
        </div>
    );
}

export default Answers;