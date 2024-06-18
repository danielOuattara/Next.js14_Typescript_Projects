type SingleMealType = {
  id: string;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

type MenuCategoriesPropsType = {
  setCategory: Dispatch<SetStateAction<string>>;
  // selected: boolean;
  // setSelected: Dispatch<SetStateAction<boolean>>;
};
