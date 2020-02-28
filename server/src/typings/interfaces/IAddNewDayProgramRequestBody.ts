export default interface IAddNewDayProgramRequestBody {
    dayProgram: {
        title: string;
        description: string;
        date: string;
    };
    dayProgramParts: Array<{
        title: string;
        airtime: number;
        description: string;
    }>;
}
