import { AboutRepository } from "../../domain/about/repository/AboutRepository";
import { About } from "../../domain/about/model/About";
import { aboutMock } from "../../domain/about/mocks/MockAbout";

export class AboutRepositoryImpl implements AboutRepository {
  async getAbout(): Promise<About> {
    if (process.env.NEXT_PUBLIC_USE_MOCKS) return Promise.resolve(aboutMock)
    const response = await fetch(process.env.NEXT_PUBLIC_ABOUT_ENDPOINT!)
    if (!response.ok) throw new Error("Failed to fetch about data")
    return (await response.json()) as About
  } 
}