import { getDataConnectorSourceFields } from 'lightning/analyticsWaveApi';
import { LightningElement } from 'lwc';

export default class PlaformDeveloperI extends LightningElement {

    columns = ['Section', 'Score(%)', 'Weight','Questions', 'Correct', 'Incorrect', 'Result'];
    numberCorrect;
    numberIncorrect;
    result;    

    cert = {
        id:1,
        name: 'Platform Developer I',
        total_questions:60,
        passing_score:.68,
            sections:[
                {   
                    id:11,
                    name:'Developer Fundementals',
                    weight:.23,
                    questions:14,
                },
                {
                    id:12,
                    name:'Process Automation and Logic',
                    weight:.30,
                    questions:18,
                },
                {
                    id:13,
                    name:'User Interface',
                    weight:.25,
                    questions:15,

                },
                {
                    id:14,
                    name:'Testing, Debugging, and Deployment',
                    weight:.22,
                    questions:13,

                },
            ]
        }

    calculate(){

       const scores = Array.from(this.template.querySelectorAll('.score'));
       const correctDivs = Array.from(this.template.querySelectorAll('.correct'));
       const incorrectDivs = Array.from(this.template.querySelectorAll('.incorrect'));
       const resultDivs = Array.from(this.template.querySelectorAll('.result'));

       scores.forEach((score,index) => {
            this.numberCorrect = Math.round((score.value * .01) * this.cert.sections[index].questions);
            correctDivs[index].innerHTML = this.numberCorrect;

            this.numberIncorrect = Math.round(this.cert.sections[index].questions - this.numberCorrect);
            incorrectDivs[index].innerHTML = this.numberIncorrect;

            this.result = this.numberCorrect / this.cert.total_questions;
            resultDivs[index].innerHTML = this.result.toLocaleString('pl-PL', { style: 'percent' });

        });
    }
}