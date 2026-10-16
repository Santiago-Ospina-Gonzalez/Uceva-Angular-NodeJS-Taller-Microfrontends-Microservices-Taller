import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Department } from '../../interfaces/department.interface';
import { DepartmentsTableComponent } from './departments-table.component';

describe('DepartmentsTableComponent', () => {
  let fixture: ComponentFixture<DepartmentsTableComponent>;
  let component: DepartmentsTableComponent;
  const departments: Department[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Departamento ${index + 1}`,
    area: index % 2 === 0 ? 'Tecnología' : 'Administración',
    status: index === 2 ? 'Inactivo' : 'Activo',
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [DepartmentsTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(DepartmentsTableComponent);
    component = fixture.componentInstance;
    component.departments = departments;
    fixture.detectChanges();
  });

  it('renders ten departments in the striped table', () => {
    expect(fixture.debugElement.queryAll(By.css('tbody tr'))).toHaveLength(10);
    expect(fixture.nativeElement.textContent).toContain('Departamento 10');
  });

  it('shows department columns without action controls', () => {
    const headers = fixture.debugElement.queryAll(By.css('thead th')).map((header) => header.nativeElement.textContent.trim());
    expect(headers).toEqual(['Id', 'Nombre', 'Área', 'Estado']);
    expect(fixture.debugElement.queryAll(By.css('button'))).toHaveLength(0);
    expect(fixture.nativeElement.textContent).not.toContain('Acciones');
  });

  it('uses the shared badge palette for areas and statuses', () => {
    expect(component.areaBadge('Tecnología')).toBe('primary');
    expect(component.areaBadge('Administración')).toBe('secondary');
    expect(component.areaBadge('Creatividad')).toBe('warning');
    expect(component.areaBadge('Producción')).toBe('success');
    expect(component.areaBadge('Servicio')).toBe('info');
    expect(component.areaBadge('Innovación')).toBe('dark');
    expect(component.areaBadge('Otra área')).toBe('secondary');
    expect(component.statusMap.Activo).toBe('success');
    expect(component.statusMap.Inactivo).toBe('danger');
  });
});
