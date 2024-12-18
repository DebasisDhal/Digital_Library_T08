import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './viewbook.component.html',
  styleUrl: './viewbook.component.css'
})
export class ViewbookComponent {

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted Successfully:', form.value);
      alert('Book submitted successfully!');
      form.reset();
    } else {
      alert('Please fill all the required fields correctly.');
    }
  }
}