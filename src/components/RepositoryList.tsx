import { useState, useEffect } from "react";

/* Components */
import { RepositoryItem } from "./RepositoryItem";

/* Types */
import { RepositoryProps } from "../types/repository.model";

/* Styles */
import "../styles/repository.scss";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  useEffect(() => {
    (async () => {
      await fetch("http://api.github.com/orgs/rocketseat/repos")
        .then((response) => response.json())
        .then((data) => setRepositories(data));
    })();
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository: RepositoryProps) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
