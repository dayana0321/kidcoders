import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test4Page } from './test4.page';

describe('Test4Page', () => {
  let component: Test4Page;
  let fixture: ComponentFixture<Test4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Test4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
