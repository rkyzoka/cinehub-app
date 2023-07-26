import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBookmarksComponent } from './card-bookmarks.component';

describe('CardBookmarksComponent', () => {
  let component: CardBookmarksComponent;
  let fixture: ComponentFixture<CardBookmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBookmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
