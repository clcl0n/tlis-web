export default interface IAddNewProgramDTO {
  program: {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  programParts: Array<{
    title: string;
    airtime: number;
    description: string;
  }>;
}
