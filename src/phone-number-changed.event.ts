export class PhoneNumberChangedEvent {
    constructor(
      public readonly id: number,
      public readonly phoneNumber: string,
    ) {}

    toString() {
      return JSON.stringify({
        id: this.id,
        phoneNumber: this.phoneNumber,
      });
    }
  }