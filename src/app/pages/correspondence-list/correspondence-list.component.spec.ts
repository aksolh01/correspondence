import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondenceListComponent } from './correspondence-list.component';

describe('CorrespondenceListComponent', () => {
  let component: CorrespondenceListComponent;
  let fixture: ComponentFixture<CorrespondenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrespondenceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
