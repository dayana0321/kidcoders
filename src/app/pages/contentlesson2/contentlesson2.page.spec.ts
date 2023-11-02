import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contentlesson2Page } from './contentlesson2.page';

describe('Contentlesson2Page', () => {
  let component: Contentlesson2Page;
  let fixture: ComponentFixture<Contentlesson2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Contentlesson2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
