import {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { getBoardMembers } from "utils/contentfulApi";
import { normalizeBoardMember } from "utils/models";

type BoardMembersType = [] | undefined;

const initialValue: BoardMembersType = undefined;

const BoardMembersContext: Context<BoardMembersType> =
  createContext(initialValue);

const BoardMembersProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [boardMembers, setBoardMembers] =
    useState<BoardMembersType>(initialValue);

  useEffect(() => {
    if (boardMembers) return;

    const fetchData = async () => {
      try {
        const response = await getBoardMembers();
        const normalizedData = response.items.map((item: any) =>
          normalizeBoardMember(item)
        );
        setBoardMembers(normalizedData);
        console.log("response members", response);
      } catch (err) {
        console.error("Could not fetch board members", err);
      }
    };
    fetchData();
  }, [boardMembers]);

  return (
    <BoardMembersContext.Provider value={boardMembers}>
      {children}
    </BoardMembersContext.Provider>
  );
};

export const useBoardMembers = () => useContext(BoardMembersContext);

export default BoardMembersProvider;
