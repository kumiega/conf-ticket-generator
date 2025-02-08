import type { Ticket } from '@/types/types';

import iconGithub from '@/assets/images/icon-github.svg';

const ConferenceTicket = ({ ticket }: { ticket: Ticket }) => {
  const avatar = URL.createObjectURL(ticket.avatar);

  return (
    <div className="ticket px-5 py-6 sm:p-8">
      <div className="flex h-full flex-col justify-between">
        <div className="flex gap-4">
          <img
            className="h-14"
            src="./src/assets/images/logo-mark.svg"
            alt="Logo of Coding Conference 2025"
          />
          <div>
            <p className="text-3xl font-bold text-box-trim sm:text-5xl">Coding Conf</p>
            <p className="text-lg opacity-70 sm:text-2xl mt-3">Jan 31, 2025 / Austin, TX</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <img className="h-[12vw] sm:h-20 rounded-xl" src={avatar} alt="Avatar" />

          <div>
            <p className="text-2xl sm:text-4xl font-medium">{ticket.fullName}</p>
            <p className="flex items-center gap-1 opacity-70">
              <img src={iconGithub} className="w-6 h-6" alt="Github logo" />
              <span className="text-xl mt-1 sm:mt-0">{ticket.github}</span>
            </p>
          </div>
        </div>

        <div className="ticket-number text-4xl opacity-25">#01609</div>
      </div>
    </div>
  );
};

export default ConferenceTicket;
