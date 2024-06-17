type TypeFriendsContext_02 = {
  people: TypePerson[];
  handleRemoveOnePerson: (id: string) => void;
  handleRefresh: () => void;
  handleClearAll: () => void;
  // setPeople: React.Dispatch<React.SetStateAction<TypePerson[]>>;
};
