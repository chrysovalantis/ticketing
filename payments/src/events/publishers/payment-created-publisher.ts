import { PaymentCreatedEvent, Publisher, Subjects } from "@cchris47tickets/common";



export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}