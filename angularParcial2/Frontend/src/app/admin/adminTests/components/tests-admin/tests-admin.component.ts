import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/admin/adminTests/services/test.service';
import { Test } from 'src/app/interfaces/test';

@Component({
  selector: 'app-tests-admin',
  templateUrl: './tests-admin.component.html',
  styleUrls: ['./tests-admin.component.css']
})
export class TestsAdminComponent implements OnInit {
  constructor(private testService: TestService, private router: Router) { }
  tests: Test[] = []
  ngOnInit(): void {
    this.getTests()
  }
  getTests() {
    this.testService.getTests().subscribe((tests) => {
      this.tests = tests
      console.log(this.tests)
    })
  }
  editarTest(id: number) {
    this.router.navigate([`/admin/tests//editar/${id}`]);
  }
  eliminarTest(id: number) {
    this.testService.eliminarTest(id).subscribe()
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
