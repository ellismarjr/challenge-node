import Repository from '../models/Repository';

interface RepositoryDTO {
  title: string;
  url: string;
  techs: [];
}

class RepositoriesRespository {
  private repositories: Repository[];

  constructor() {
    this.repositories = [];
  }

  public all(): Repository[] {
    return this.repositories;
  }

  public create({ title, url, techs }: RepositoryDTO): Repository {
    const repository = new Repository({ title, url, techs });

    this.repositories.push(repository);
    return repository;
  }
}

export default RepositoriesRespository;
