import Detail from "@/components/Detail";
import Principles from "@/components/Principles";
import Spotlight from "@/components/Spotlight";
import UserType from "@/components/UserType";

export default function Home() {
  return (
    <main>
        <Spotlight/>
        <Detail/>
        <Principles/>
        <UserType/>
    </main>
  );
}
