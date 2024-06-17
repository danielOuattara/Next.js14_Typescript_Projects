"use client";
import { useState } from "react";
import data from "@/data";
import List from "./List";
import Counter from "@/components/Counter";

export default function PageFunctionSolution() {
  const [people, setPeople] = useState<TypePerson[]>(data);
  const handleEmpty = () => setPeople(() => []);
  const handleRefresh = () => setPeople(() => data);
  const handleRemoveOnePerson = (id: string) =>
    setPeople(() => people.filter((person) => person.id !== id));

  return (
    <main>
      <section className="container">
        <Counter length={people.length} />
        <List people={people} handleRemoveOnePerson={handleRemoveOnePerson} />
        {people.length === 0 ? (
          <button onClick={handleRefresh}> Refresh</button>
        ) : (
          <button onClick={handleEmpty}> clear all</button>
        )}
      </section>
    </main>
  );
}
