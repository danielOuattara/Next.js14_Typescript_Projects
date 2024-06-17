export default function Counter({ length }: { length: number }) {
  const quantity = length > 1 ? "birthdays" : "birthday";
  return (
    <h3 className="text-center">
      {length} {quantity} today
    </h3>
  );
}
