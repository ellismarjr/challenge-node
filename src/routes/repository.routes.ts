import { Router } from 'express';

import RepositoriesRepository from '../repositories/RepositoriesRepository';
import CreateRepositoryService from '../Services/CreateRepositoryService';

const repositoryRouter = Router();

const repositoriesRepository = new RepositoriesRepository();

repositoryRouter.get('/', (request, response) => {
  const repositories = repositoriesRepository.all();
  return response.json(repositories);
});

repositoryRouter.post('/', (request, response) => {
  try {
    const { title, url, techs } = request.body;

    const createRepository = new CreateRepositoryService(
      repositoriesRepository,
    );

    const repository = createRepository.execute({ title, url, techs });

    return response.json(repository);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default repositoryRouter;
