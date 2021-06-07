import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  addForm: FormGroup;
  showData: any;

  constructor(
    private fb: FormBuilder,
  ) { 
    this.initForm()
  }

  ngOnInit(): void {
  }

  initForm() {
    try {
 
      this.addForm = this.fb.group({
        accoundId: ['', [Validators.required]],
        currency: ['', [Validators.required]],
        amount: ['', [Validators.required,]],
        date: ['', [Validators.required,]],
      });
    } catch (error) {
      console.log(` | initForm | catch error => ${error}`)
    }
  }

  async submitCreateForm() {
    try {
      if (this.addForm.invalid) { return; }
      else {
        const accountData = {
          accoundId: this.addForm.value.accoundId,
          currency: this.addForm.value.currency,
          amount: this.addForm.value.amount,
          date: this.addForm.value.date,
        }
        this.showData = accountData;
        console.log(`${JSON.stringify(accountData)}`);
       alert(`${JSON.stringify(accountData)}`)
        }
    } catch (error) {
      console.log(` | getUserList | catch error => ${error}`)
    }
  }

  get f() { return this.addForm.controls; };
}
