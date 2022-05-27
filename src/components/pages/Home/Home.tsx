import Logo from "atoms/Logo";
import { useBoardMembers, useWhiskyList } from "providers";

const App = () => {
  const whisky = useWhiskyList();
  const members = useBoardMembers();

  return (
    <div>
      <Logo height={120} />
      <h1>Welcome to KGB Whisky!</h1>
      {!!whisky && <p>YES whisky!!!</p>}
      {!!members && <p>YES members!!!</p>}
    </div>
  );
};

export default App;
