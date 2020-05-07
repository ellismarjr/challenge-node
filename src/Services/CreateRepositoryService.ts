import RepositoriesRepository from '../repositories/RepositoriesRepository';
import Repository from '../models/Repository';

interface Request {
  title: string;
  url: string;
  techs: Array<string>;
}

class CreateRepositoryService {
  private repositoriesRepository: RepositoriesRepository;

  constructor(repositoriesRepository: RepositoriesRepository) {
    this.repositoriesRepository = repositoriesRepository;
  }

  public execute({ title, url, techs }: Request): Repository {
    if (!title) {
      throw Error('Title is required!');
    }

    if (!url) {
      throw Error('URL is required!');
    }

    if (!techs) {
      throw Error('Techs is required!');
    }

    const repository = this.repositoriesRepository.create({
      title,
      url,
      techs,
    });

    return repository;
  }
}

export default CreateRepositoryService;
