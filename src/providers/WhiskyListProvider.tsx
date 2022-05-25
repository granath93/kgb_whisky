import {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { getAllWhiskeysInStock } from "utils/api";

type WhiskyValue = [] | undefined;

const initialValue: WhiskyValue = [];

const WhiskyContext: Context<WhiskyValue> = createContext(initialValue);

const WhiskyListProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [whiskyList, setWhiskyList] = useState<WhiskyValue>(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllWhiskeysInStock();
        setWhiskyList(response);
      } catch (err) {
        console.error("Could not fetch all whiskeys,", err);
      }
    };
    fetchData();
  }, []);

  return (
    <WhiskyContext.Provider value={whiskyList}>
      {children}
    </WhiskyContext.Provider>
  );
};

export const useWhiskyList = () => useContext(WhiskyContext);

export default WhiskyListProvider;
