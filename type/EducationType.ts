export type DataInterface = {
    label: string,
    date: string,
    description: string,
    skills: Array<string>,
}

export type EducationProps = {
    title: string,
    data: DataInterface[]
}