export default function FetchError({ message }: TypeFetchError) {
  return (
    <main>
      <div className="title">
        <h2>{message}</h2>
      </div>
    </main>
  );
}
