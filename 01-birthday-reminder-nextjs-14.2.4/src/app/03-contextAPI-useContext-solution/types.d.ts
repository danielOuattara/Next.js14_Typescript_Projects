type TypeFriendsContext_03 = {
  people: TypePerson[];
  handleRemoveOnePerson: (id: string) => void;
  handleRefresh: () => void;
  // setPeople: React.Dispatch<React.SetStateAction<TypePerson[]>>;
  handleClearAll: () => void;
};
