import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Department } from '../../interfaces/department.interface';
import { DepartmentsService } from './departments.service';

describe('DepartmentsService', () => {
  let http: HttpTestingController;
  let service: DepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DepartmentsService);
  });

  afterEach(() => http.verify());

  it('requests the specified number of departments', () => {
    const departments: Department[] = [
      { id: 1, name: 'Sistemas', area: 'Tecnología', status: 'Activo' },
    ];
    service.getAllDepartments(10).subscribe((result) => expect(result).toEqual(departments));

    const request = http.expectOne('http://localhost:3005/api/departments/10');
    expect(request.request.method).toBe('GET');
    request.flush(departments);
  });
});
