import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoardsPageComponent } from './main-boards-page.component';

describe('MainBoardsPageComponent', () => {
  let component: MainBoardsPageComponent;
  let fixture: ComponentFixture<MainBoardsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainBoardsPageComponent]
    });
    fixture = TestBed.createComponent(MainBoardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
