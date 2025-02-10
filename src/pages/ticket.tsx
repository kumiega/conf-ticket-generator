import { useTicket } from '@/context/ticket-context';

import ConferenceTicket from '@/components/conference-ticket';
import GradientText from '@/components/gradient-text';
import Heading from '@/components/heading';
import Paragraph from '@/components/paragraph';

const Ticket = () => {
  const { ticket } = useTicket();

  if (!ticket) {
    return (
      <div className="mx-auto max-w-fit px-3 py-2 rounded-md text-center tetx-white bg-orange-500 text-2xl">
        Ticket not found!
      </div>
    );
  }

  return (
    <>
      <Heading>
        Congrats, <GradientText>{ticket.fullName}</GradientText>!
      </Heading>
      <Paragraph>
        Your ticket is ready. We&apos;ve emailed your ticket to{' '}
        <span className="text-orange-500">{ticket.email}</span> and will send updates in the run up
        to the event
      </Paragraph>

      <div className="grid place-content-center w-full grid-cols-[1fr] mt-12 lg:mt-24">
        <ConferenceTicket ticket={ticket} />
      </div>
    </>
  );
};

export default Ticket;
