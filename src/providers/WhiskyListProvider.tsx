import {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { getAllWhiskeysInStock } from "utils/contentfulApi";
import { normalizeWhisky } from "utils/models";

type WhiskyValue = [] | undefined;

const initialValue: WhiskyValue = undefined;

const WhiskyContext: Context<WhiskyValue> = createContext(initialValue);

const WhiskyListProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [whiskyList, setWhiskyList] = useState<WhiskyValue>(initialValue);

  useEffect(() => {
    if (whiskyList) return;

    const fetchData = async () => {
      try {
        const response = await getAllWhiskeysInStock();
        const normalizedData = response.items.map((item: any) =>
          normalizeWhisky(item)
        );

        setWhiskyList(normalizedData);
      } catch (err) {
        console.error("Could not fetch all whiskeys,", err);
      }
    };
    fetchData();
  }, [whiskyList]);

  return (
    <WhiskyContext.Provider value={whiskyList}>
      {children}
    </WhiskyContext.Provider>
  );
};

export const useWhiskyList = () => useContext(WhiskyContext);

export default WhiskyListProvider;
