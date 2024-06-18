import SingleMenu from "./SingleMenuFunction";

type MenuPropsType = {
  menuToRender: SingleMealType[];
};

const Menu = (props: MenuPropsType) => {
  return (
    <div className="section-center">
      {props.menuToRender.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
};

export default Menu;
