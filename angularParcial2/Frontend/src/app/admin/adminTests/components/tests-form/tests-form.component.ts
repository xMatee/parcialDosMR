import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from 'src/app/admin/adminTests/services/test.service';

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.css']
})
export class TestsFormComponent implements OnInit {
  errorMessage: string = '';

  constructor(
    private testsService: TestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public testsForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    initials: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  guardarTest(): void {
    if (this.testsForm.valid) {
      this.testsService.guardarTest(this.testsForm.value).subscribe(
        (respuesta) => {
          console.log('Test guardado:', respuesta);
          this.router.navigate(['admin/tests']);
        },
        (error) => {
          console.error('Error: ', error);
          this.handleErrorResponse(error);
        }
      );
    }
  }

  private handleErrorResponse(error: any): void {
    if (error && error.error && error.error.message) {
      this.errorMessage = error.error.message;
    } else {
      this.errorMessage = 'Algo salio mal, intenta mas tarde';
    }
  }
}
