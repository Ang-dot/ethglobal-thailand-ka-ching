import { GameProvider } from "@/utils/GameProvider";

export default function GameLayout({ children }) {
  return <GameProvider>{children}</GameProvider>;
}