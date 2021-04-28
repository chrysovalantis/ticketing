import { Publisher, Subjects, TicketUpdatedEvent} from "@cchris47tickets/common";
import { natsWrapper } from "../../nats-wrapper";


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent>{
  readonly subject = Subjects.TicketUpdated;
}

