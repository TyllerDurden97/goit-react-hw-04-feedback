/* eslint-disable no-lone-blocks */
import { React, useState } from "react";
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from "components/Section/Section";
import { Notification } from 'components/NotificationMessage/NotificationMessage';

export const App = () => {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0); 

   const handleFeedbButton = (e) => {
      const nameOfState = e.currentTarget.name;

      switch (nameOfState) {
         case 'good':
            setGood((prevState) => (prevState + 1))
            break;
         case 'neutral':
            setNeutral((prevState) => (prevState + 1))
            break;
         case 'bad':
            setBad((prevState) => (prevState + 1))
            break;
         default:
            return;
      };
   };

   const countTotalFeedback = () => 
      (good + neutral + bad);
   
   const countPositiveFeedbackPercentage = () => (
      countTotalFeedback() ?
         Math.round(good * 100 / countTotalFeedback()) :
         0
   );

   return (
      <>
         <Section title={'Please leave feedback'}>
            <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={handleFeedbButton} />
         </Section >
         {countTotalFeedback() ?
            (<Section title={'Statistic'}>
               <Statistics good={good} neutral={neutral} bad={bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()} />
            </Section>) : (<Notification message="There is no feedback" />)}
      </>
   );  
   };



   