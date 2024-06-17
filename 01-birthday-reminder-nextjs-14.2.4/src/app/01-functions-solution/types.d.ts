interface IPerson {
  id: string;
  name: string;
  age: number;
  image: string;
}

type TypePerson = {
  id: string;
  name: string;
  age: number;
  image: string;
};

type TypeListProps = {
  people: PersonType[];
  handleRemoveOnePerson: Function;
};
