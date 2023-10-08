import { LightningElement } from 'lwc';


export default class CertificationCalculator extends LightningElement {

    selectedCert;
    showPDIDetail;
    showPDIIDetail;
    showADMIDetail;

    get certifications(){
       return [
                {label:'Plaform Developr I', value:'PDI'},
                {label:'Plaform Developer II', value:'PDII'},
                {label: 'Administrator', value:'ADMI'},
            ];  
    }

    handleSelection(event){
        this.selectedCert = event.detail.value;
        
        if(this.selectedCert === 'PDI')
            this.showPDIDetail = true;
        else 
            this.showPDIDetail = false;

        if(this.selectedCert === 'PDII')
            this.showPDIIDetail = true;
        else
            this.showPDIIDetail = false;

        if(this.selectedCert === 'ADMI')
            this.showADMIDetail = true;
        else
            this.showADMIDetail = false;
        
        
    }


    
}