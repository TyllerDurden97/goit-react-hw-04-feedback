/* eslint-disable no-lone-blocks */
import { Component } from "react";
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from "components/Section/Section";
import { Notification } from 'components/NotificationMessage/NotificationMessage';
// import { css } from 'components/Section/Section.module.css';


export class App extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0
   };
   
   handleFeedbButton = (e) => {
      const nameOfState = e.currentTarget.name;
      this.setState((prevState) => ({ [nameOfState]: prevState[nameOfState] + 1 }
      ));
      // console.log(this.state.good);
      // console.log(e.currentTarget.name);
   };

   countTotalFeedback = ({good, neutral, bad}) => 
      (good + neutral + bad);
   
   countPositiveFeedbackPercentage = ({ good }) => (
      this.countTotalFeedback(this.state) ?
         Math.round(good * 100 / this.countTotalFeedback(this.state)) :
         0

   );
   
   
   render() {
      const { good, neutral, bad } = this.state;

      return (
         <>
         <Section title={'Please leave feedback'}>
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedbButton}/>
            </Section >
            {this.countTotalFeedback(this.state) ?
               (<Section title={'Statistic'}>
                  <Statistics good={good} neutral={neutral} bad={bad}
                     total={this.countTotalFeedback(this.state)}
                     positivePercentage={this.countPositiveFeedbackPercentage(this.state)} />
               </Section>) : (<Notification message="There is no feedback" />)}
         </>         
              )
   };



     /* <div>
            <h2>Please leave feedback</h2>
            <button name='good' type='button' onClick={this.handleFeedbButton}>Good</button>
            <button name='neutral' type='button' onClick={this.handleFeedbButton}>Neutral</button>
            <button name='bad' type='button' onClick={this.handleFeedbButton}>Bad</button>
         </div>
         <div>
               <h2>Statistic</h2> */}
            // eslint-disable-next-line no-lone-blocks
            {/* <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback(this.state)} positivePercentage={this.countPositiveFeedbackPercentage(this.state)}> */}
               
      
               {/* <p>Good:<span>{this.state.good}</span></p>
               <p>Neutral:<span>{this.state.neutral}</span></p>
               <p>Bad:<span>{this.state.bad}</span></p>
               <p>Total:<span>{this.countTotalFeedback(this.state)}</span></p>
               <p>Positive feedback:<span>{this.countPositiveFeedbackPercentage(this.state)}%</span></p> */}

               {/* <span>Neutral:{ this.state.neutral}</span>
               <span>Bad:{this.state.bad}</span>
               <span>Total:{this.countTotalFeedback(this.state)}</span>
               <span>Positive feedback:{this.countPositiveFeedbackPercentage(this.state)}%</span> */}

            {/* </div> */}