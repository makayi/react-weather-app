import React, {Component} from 'react';  
import CheckboxOrRadioGroup from '../Components/CheckBox';  
import SingleInput from '../Components/SingleInput';  
import TextArea from '../Components/TextArea';  
import Select from '../Components/Select';

class FormContainer extends Component {  
    constructor(props) {
      super(props);
      this.state = {
        ownerName: '',
        petSelections: [],
        selectedPets: [],
        ageOptions: [],
        ownerAgeRangeSelection: '',
        siblingOptions: [],
        siblingSelection: [],
        currentPetCount: 0,
        description: ''
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleClearForm = this.handleClearForm.bind(this);
      this.handleFullNameChange = this.handleFullNameChange.bind(this);
      this.handleCurrentPetCountChange = this.handleCurrentPetCountChange.bind(this);
      this.handleAgeRangeSelect = this.handleAgeRangeSelect.bind(this);
      this.handlePetSelection = this.handlePetSelection.bind(this);
      this.handleSiblingsSelection = this.handleSiblingsSelection.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }
    componentDidMount() {
      // simulating a call to retrieve user data
      // (create-react-app comes with fetch polyfills!)
   
    }
    handleFullNameChange(e) {
      this.setState({ ownerName: e.target.value });
      
    }
    handleCurrentPetCountChange(e) {
      this.setState({ currentPetCount: e.target.value });
    }
    handleAgeRangeSelect(e) {
      this.setState({ ownerAgeRangeSelection: e.target.value });
    }
    handlePetSelection(e) {
      const newSelection = e.target.value;
      let newSelectionArray;
      if(this.state.selectedPets.indexOf(newSelection) > -1) {
        newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
      } else {
        newSelectionArray = [...this.state.selectedPets, newSelection];
      }
      this.setState({ selectedPets: newSelectionArray });
    }
    handleSiblingsSelection(e) {
      this.setState({ siblingSelection: [e.target.value] });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        ownerName: '',
        selectedPets: [],
        ownerAgeRangeSelection: '',
        siblingSelection: [],
        currentPetCount: 0,
        description: ''
      });
    }
    handleFormSubmit(e) {
      e.preventDefault();
  
      const formPayload = {
        ownerName: this.state.ownerName,
        selectedPets: this.state.selectedPets,
        ownerAgeRangeSelection: this.state.ownerAgeRangeSelection,
        siblingSelection: this.state.siblingSelection,
        currentPetCount: this.state.currentPetCount,
        description: this.state.description
      };
  
      console.log('Send this in a POST request:', formPayload)
      this.handleClearForm(e);
    }
    render() {
      return (
        <form className="container" onSubmit={this.handleFormSubmit}>
          <h5>Pet Adoption Form: {this.state.ownerName}</h5>
          <SingleInput
            inputType={'text'}
            title={'Full name'}
            name={'name'}
            controlFunc={this.handleFullNameChange}
            content={this.state.ownerName}
            placeholder={'Type first and last name here'} />
          
          <input
            type="submit"
            className="btn btn-primary float-right"
            value="Submit"/>
          <button
            className="btn btn-link float-left"
            onClick={this.handleClearForm}>Clear form</button>
        </form>
      );
    }
  }
  
  export default FormContainer;