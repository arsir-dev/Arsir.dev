import { AboutRepository } from "../repository/AboutRepository";

export class GetAboutUseCase {
  constructor(private repository: AboutRepository) {}
  
  async execute() {
    return this.repository.getAbout()
  }
}