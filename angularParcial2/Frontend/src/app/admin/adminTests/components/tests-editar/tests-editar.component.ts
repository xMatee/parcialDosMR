import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/admin/adminTests/services/test.service';
import { Test } from 'src/app/interfaces/test';

@Component({
  selector: 'app-editar-test',
  templateUrl: './tests-editar.component.html',
  styleUrls: ['./tests-editar.component.html']
})
export class TestsEditarComponent implements OnInit {
  testId: number = 0;
  test: Test = { id: 0, name: "", initials: "", description: "", isActive: true, partCount: 0 };
  errorMessage: string = '';

  constructor(
    private testsService: TestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const testIdParam = this.route.snapshot.paramMap.get('id');
    this.testId = testIdParam ? +testIdParam : 0;

    if (!this.testId) {
      console.error('ID de test no válido.');
      return;
    }

    this.obtenerTest();
    this.cargarTest();
  }

  obtenerTest() {
    this.testsService.getTest(this.testId).subscribe(
      (test) => {
        this.test = test;
      },
      (error) => {
        console.error('Error al obtener test:', error);
        this.handleErrorResponse(error);
      }
    );
  }

  public testForm: FormGroup = this.formBuilder.group({
    name: [this.test.name, [Validators.required]],
    initials: [this.test.initials, [Validators.required]],
    description: [this.test.description, [Validators.required]],
    isActive: [this.test.isActive]
  });

  cargarTest(): void {
    this.testsService.getTest(this.testId).subscribe(
      (test) => {
        this.testForm.setValue({
          name: test.name,
          initials: test.initials,
          description: test.description,
          isActive: test.isActive
        });
      },
      (error) => {
        console.error('Error al cargar el test:', error);
        this.handleErrorResponse(error);
      }
    );
  }

  guardarEdicion(): void {
    if (this.testForm.valid) {
      const testEditado = {
        id: this.test.id,
        name: this.testForm.value.name,
        initials: this.testForm.value.initials,
        description: this.testForm.value.description,
        isActive: this.testForm.value.isActive
      };

      this.testsService.editarTest(this.testId, testEditado).subscribe(
        (respuesta) => {
          console.log('Test editado exitosamente:', respuesta);
          this.router.navigate(['admin/tests']);
        },
        (error) => {
          console.error('Error al editar el test:', error);
          this.handleErrorResponse(error);
        }
      );
    }
  }

  private handleErrorResponse(error: any): void {
    if (error && error.error && error.error.message) {
      this.errorMessage = error.error.message;
    } else {
      this.errorMessage = 'Algo salió mal, intenta más tarde';
    }
  }
}
