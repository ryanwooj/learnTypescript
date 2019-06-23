class Vehicle {
  protected honk(): void {
    console.log('빵빵!!!');
  }
}

const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
  private drive(): void {
    console.log('덜덜덜덜더러ㄹ어어얼');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.drive();
car.honk();
