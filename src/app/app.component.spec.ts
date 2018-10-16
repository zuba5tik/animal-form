import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { text } from '@angular/core/src/render3/instructions';

describe('Animal form', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('is component defined', () => {
    expect(component).toBeDefined();
  });

  it('is form invalid when empty', () => {
    let petName = component.animalForm.controls['animalName'];
    petName.setValue(null);
    // let petLabel = component.animalForm.controls['typeLabel'];
    // petLabel.setValue(null);
    expect(component.animalForm.controls['animalName']).toMatchSnapshot();
    // expect(component.animalForm.controls['typeLabel'].valid).toBeFalsy();
  });
});
