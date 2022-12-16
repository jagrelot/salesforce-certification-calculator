import { getDataConnectorSourceFields } from 'lightning/analyticsWaveApi';
import { LightningElement } from 'lwc';

export default class PlaformDeveloperI extends LightningElement {

    columns = ['Section', 'Score(%)', 'Questions', 'Correct', 'Incorrect', 'Result'];    

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

                }
            
            ]
        }

    calculate(){
       
    }
}