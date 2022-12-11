import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CertificationList extends LightningElement {

    total_questions = 60;
    passing_score=.68;
    section1_weight = .23;
    section1_question = 14;
    section2_question = 18;
    section3_question = 15;
    section4_question = 13;
    section2_weight = .30;
    section3_weight = .25;
    section4_weight = .22;
    score1=0;
    score2=0;
    score3=0;
    score4=0;
    correct1;
    correct2;
    correct3;
    correct4;
    total_correct;
    incorrect1;
    incorrect2;
    incorrect3;
    incorrect4;
    total_incorrect;
    result1;
    result2;
    result3;
    result4;
    overall;
    pass_fail;
    title;
    message;
    variant;

    handleClick(){
        //get score input
        this.score1 = this.template.querySelector("lightning-input[data-id=score1]").value;
        this.score2 = this.template.querySelector("lightning-input[data-id=score2]").value;
        this.score3 = this.template.querySelector("lightning-input[data-id=score3]").value;
        this.score4 = this.template.querySelector("lightning-input[data-id=score4]").value;

        //calculate number of correct questions for each section
        this.correct1=Math.round(.01 * this.score1 * this.section1_question);
        this.correct2=Math.round(.01 * this.score2 * this.section2_question);
        this.correct3=Math.round(.01 * this.score3 * this.section3_question);
        this.correct4=Math.round(.01 * this.score4 * this.section4_question);
        
        //calculate total number of correct questions
        this.total_correct=this.correct1+this.correct2+this.correct3+this.correct4;

        //calculate total number of incorrect questions
        this.incorrect1=this.section1_question - this.correct1;
        this.incorrect2=this.section2_question - this.correct2;
        this.incorrect3=this.section3_question - this.correct3;
        this.incorrect4=this.section4_question - this.correct4;
        
        //calculate number of incorrect questions for each section
        this.total_incorrect=this.incorrect1+this.incorrect2+this.incorrect3+this.incorrect4;
        
        //calculate results column
        this.result1=this.correct1/this.section1_question;
        this.result2=this.correct1/this.section2_question;
        this.result3=this.correct1/this.section3_question;
        this.result4=this.correct1/this.section4_question;

        //calculate overall exam score
        this.overall=this.total_correct/this.total_questions;

        //notifications
        if(this.overall >= this.passing_score){
            this.title='Congratulations!';
            this.message="You've passed Platform Developer I. Awesome Job!";
            this.variant='Success';
            this.overallScoreNotification(this.title,this.message,this.variant);
        }else{
            this.title='Sorry! :(';
            this.message="You did not pass Platform Developer I. Keep trying!";
            this.variant='error';
            this.overallScoreNotification(this.title,this.message,this.variant);
        }
    }

    overallScoreNotification(title,message,variant){
       
        const evt = new ShowToastEvent({
            title: this.title,
            message: this.message,
            variant: this.variant,
        });
        this.dispatchEvent(evt);
    }
    
}