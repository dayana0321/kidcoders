import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentlesson1Page } from './contentlesson1.page';

describe('Contentlesson1Page', () => {
  let component: Contentlesson1Page;
  let fixture: ComponentFixture<Contentlesson1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contentlesson1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
