import { UserEnum } from "../shared/utils/UserEnum"

export class AcademicQualification {
    salutation!: UserEnum;
    nationality!: string;
    passportNumber!: string;
    gender!: UserEnum;
    contactAddress!: string;
    country!: UserEnum;
    city!: string;
    entryLevel!: UserEnum;
    courseInterested!: UserEnum;
    studyMode!: UserEnum;
}