import { Publisher, OrderCancelledEvent, Subjects} from '@cchris47tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}