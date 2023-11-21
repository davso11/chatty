import { BellDot, MessageCircle, Settings, UserPlus } from "lucide-react";

export const navItems = [
  {
    path: "/home/add-friend",
    label: "Nouvel(le) ami(e)",
    Icon: UserPlus,
  },
  {
    path: "/home/friend-requests",
    label: "Demandes d'ajout",
    Icon: BellDot,
  },
  {
    path: "/home/chats",
    label: "Vos discussions",
    Icon: MessageCircle,
  },
];
