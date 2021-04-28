import { Publisher, Subjects, TicketCreatedEvent} from "@cchris47tickets/common";


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
  readonly subject = Subjects.TicketCreated;
}