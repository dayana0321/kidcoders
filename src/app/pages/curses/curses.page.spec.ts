import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursesPage } from './curses.page';

describe('CursesPage', () => {
  let component: CursesPage;
  let fixture: ComponentFixture<CursesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
