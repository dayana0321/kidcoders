import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lessonscourse1Page } from './lessonscourse1.page';

describe('Lessonscourse1Page', () => {
  let component: Lessonscourse1Page;
  let fixture: ComponentFixture<Lessonscourse1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lessonscourse1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
