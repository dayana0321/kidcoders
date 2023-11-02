import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lessonscourse2Page } from './lessonscourse2.page';

describe('Lessonscourse2Page', () => {
  let component: Lessonscourse2Page;
  let fixture: ComponentFixture<Lessonscourse2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Lessonscourse2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
