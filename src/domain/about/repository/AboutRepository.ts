import { About } from "../model/About";

export interface AboutRepository {
  getAbout(): Promise<About>
}