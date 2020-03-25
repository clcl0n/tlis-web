export default interface IAddNewProgramDTO {
    dayProgram: {
        title: string;
        description: string;
        date: string;
        imageUrl: string;
    };
    dayProgramParts: Array<{
        title: string;
        airtime: number;
        description: string;
    }>;
}
