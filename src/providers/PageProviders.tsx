import { ReactNode } from "react";

import { BoardMembers, WhiskyList } from ".";

const PageProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
  <WhiskyList>
    <BoardMembers>{children}</BoardMembers>
  </WhiskyList>
);

export default PageProviders;
