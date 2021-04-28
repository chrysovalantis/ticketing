import { Subjects, Publisher, ExpirationCompleteEvent } from '@cchris47tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
  readonly subject = Subjects.ExpirationComplete;
  
}