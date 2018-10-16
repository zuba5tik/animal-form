import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppTestComponent } from './app-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('component tests', () => {
  let component: AppTestComponent;
  let fixture: ComponentFixture<AppTestComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ AppTestComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppTestComponent);
    component = fixture.componentInstance;
  });

  it('is component defined', () => {
    expect(component).toBeDefined();
  });

  it('is form valid when notempty', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('Mobile');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('10000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('100');
    expect(component.rForm.valid).toBeTruthy();
  });

  it('is form invalid when price less than 5000', () => {
    let itemName = component.rForm.controls['name'];
    itemName.setValue('Mobile');
    let itemPrice = component.rForm.controls['price'];
    itemPrice.setValue('1000');
    let itemShipping = component.rForm.controls['shipping'];
    itemShipping.setValue('100');

    expect(component.rForm.valid).toBeFalsy();
    // expect(component.rForm.controls['price'].valid).toBeFalsy();
    expect(itemPrice.errors['min']).toBeDefined();
  });
});
