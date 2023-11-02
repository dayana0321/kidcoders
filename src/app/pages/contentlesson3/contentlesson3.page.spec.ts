import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentlesson3Page } from './contentlesson3.page';

describe('Contentlesson3Page', () => {
  let component: Contentlesson3Page;
  let fixture: ComponentFixture<Contentlesson3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contentlesson3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
