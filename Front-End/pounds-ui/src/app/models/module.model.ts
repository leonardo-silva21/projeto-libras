import { Lesson } from "./lesson.model";

export interface Module {
    title: string,
    lessons: Lesson[],
    note: number
}