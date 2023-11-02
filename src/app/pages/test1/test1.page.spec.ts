import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test1Page } from './test1.page';

describe('Test1Page', () => {
  let component: Test1Page;
  let fixture: ComponentFixture<Test1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Test1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
