// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  formGroup: FormGroup | any;
  origineOptions = [
    { value: 'Quartier', label: 'Quartier' },
    { value: 'Gare', label: 'Gare' },
    { value: 'UN/LOCODE', label: 'UN/LOCODE' },
    { value: 'Aéroport', label: 'Aéroport' },
    { value: 'ZIP', label: 'ZIP' },
  ];

  destinationOptions = [{ value: 'Quartier', label: 'Quartier' },
  { value: 'Gare', label: 'Gare' },
  { value: 'UN/LOCODE', label: 'UN/LOCODE' },
  { value: 'Aéroport', label: 'Aéroport' },
  { value: 'ZIP', label: 'ZIP' },
    // Add more destination options as needed
  ];

  thirdOptions = [
    { value: 'Option1Third', label: 'Option 1 Third' },
    { value: 'Option2Third', label: 'Option 2 Third' },
    // Add more third options as needed
  ];
  isGareSelected: boolean | undefined;
  isQuartierSelected: boolean | undefined;
  isUnLocodeSelected: boolean |undefined;
  isAeroportSelected: boolean | undefined;
  isZIPSelected: boolean | undefined;

  isGareSelected1: boolean | undefined;
  isQuartierSelected1: boolean | undefined;
  isUnLocodeSelected1: boolean |undefined;
  isAeroportSelected1: boolean | undefined;
  isZIPSelected1: boolean | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group and form controls
    this.formGroup = this.formBuilder.group({
      option1: new FormControl(''), // Set default value for option1 here if needed
      option2: new FormControl(''), // Set default value for option2 here if needed
      option3: new FormControl(''), // Set default value for option3 here if needed,
      uic: new FormControl(''),
      code: new FormControl(''),
      nom: new FormControl('')
    });
  }

  // Method to handle the selection change of Option 1
  onOption1Change(selectedValue: any) {
    this.isGareSelected = selectedValue === 'Gare';
    this.isQuartierSelected = selectedValue === 'Quartier';
    this.isUnLocodeSelected = selectedValue === 'UN/LOCODE';
    this.isAeroportSelected = selectedValue === 'Aéroport';
    this.isZIPSelected = selectedValue === 'ZIP';
  
    if (!this.isGareSelected && !this.isQuartierSelected && !this.isUnLocodeSelected) {
      // If any other option is chosen, hide all additional fields and reset their values
      this.formGroup.patchValue({ uic: '', code: '', nom: '', otherField: '' });
    } else {
      // For "Gare" option, reset the value of the "otherField"
      this.formGroup.patchValue({ otherField: '' });
    }
  }
  onOption1Change1(selectedValue: any) {
    this.isGareSelected1 = selectedValue === 'Gare';
    this.isQuartierSelected1 = selectedValue === 'Quartier';
    this.isUnLocodeSelected1 = selectedValue === 'UN/LOCODE';
    this.isAeroportSelected1 = selectedValue === 'Aéroport';
    this.isZIPSelected1 = selectedValue === 'ZIP';
  
    if (!this.isGareSelected && !this.isQuartierSelected && !this.isUnLocodeSelected) {
      // If any other option is chosen, hide all additional fields and reset their values
      this.formGroup.patchValue({ uic: '', code: '', nom: '', otherField: '' });
    } else {
      // For "Gare" option, reset the value of the "otherField"
      this.formGroup.patchValue({ otherField: '' });
    }
  }
  // Add this property in your component class
selectedIcon: string | null = null;

  onIconClick(iconName: string) {
    this.selectedIcon = iconName;
    
    // Handle the click event based on the iconName
    switch (iconName) {
      case 'plane':
        // Code to handle the plane icon click
        break;
      case 'boat':
        // Code to handle the boat icon click
        break;
      case 'truck':
        // Code to handle the truck icon click
        break;
      default:
        // Handle other cases if needed
        break;
    }
  }
  
  
}
