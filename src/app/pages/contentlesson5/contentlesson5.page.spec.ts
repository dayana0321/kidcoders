import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentlesson5Page } from './contentlesson5.page';

describe('Contentlesson5Page', () => {
  let component: Contentlesson5Page;
  let fixture: ComponentFixture<Contentlesson5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contentlesson5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
