import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { Department } from '../../interfaces/department.interface';
import { DepartmentsService } from '../../services/departments/departments.service';
import { DepartmentsPage } from './departments.page';

const departments: Department[] = [
  { id: 1, name: 'Sistemas', area: 'Tecnología', status: 'Activo' },
  { id: 2, name: 'Contabilidad', area: 'Administración', status: 'Activo' },
];

describe('DepartmentsPage', () => {
  afterEach(() => TestBed.resetTestingModule());

  function createPage(getAllDepartments = jest.fn().mockReturnValue(of(departments))) {
    TestBed.configureTestingModule({
      providers: [{ provide: DepartmentsService, useValue: { getAllDepartments } }],
    });
    return {
      page: TestBed.runInInjectionContext(() => new DepartmentsPage()),
      getAllDepartments,
    };
  }

  it('loads ten departments and exposes the success state', () => {
    const { page, getAllDepartments } = createPage();
    page.ngOnInit();

    expect(getAllDepartments).toHaveBeenCalledWith(10);
    expect(page.state).toBe('success');
    expect(page.departments).toEqual(departments);
  });

  it('exposes the error state when loading fails', () => {
    const { page } = createPage(jest.fn().mockReturnValue(throwError(() => new Error('offline'))));
    jest.spyOn(console, 'error').mockImplementation(() => {});
    page.ngOnInit();

    expect(page.state).toBe('error');
  });

  it('renders the API response in the departments table', async () => {
    const getAllDepartments = jest.fn().mockReturnValue(of(departments));
    await TestBed.configureTestingModule({
      imports: [DepartmentsPage],
      providers: [{ provide: DepartmentsService, useValue: { getAllDepartments } }],
    }).compileComponents();

    const fixture: ComponentFixture<DepartmentsPage> = TestBed.createComponent(DepartmentsPage);
    fixture.detectChanges();

    expect(getAllDepartments).toHaveBeenCalledWith(10);
    expect(fixture.debugElement.queryAll(By.css('tbody tr'))).toHaveLength(departments.length);
    expect(fixture.nativeElement.textContent).toContain('Sistemas');
    expect(fixture.nativeElement.textContent).toContain('Contabilidad');
  });
});
