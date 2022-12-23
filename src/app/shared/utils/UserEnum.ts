enum Salutation {
    Mr,Mrs,Ms,Madam,Dr
}

enum Gender {
    Male, Female
}

enum EntryLevel {
    Certificate,Foundation,Diploma,Bachelor_of_honor_degree,Masters_degree,Phd
}

enum StudyMode {
    Full_time, Part_time
}

enum CourseInterested {
    Diploma,
    Diploma_in_Information_and_Communication_Technology,
    Diploma_in_Business_Information_Technology,
    Diploma_in_Business_Administration,
    Diploma_in_Accounting,
    Diploma_in_Mechatronic_Engineering,
    APIIT__Diploma_in_Electrical_and_Electronic_Engineering,
    APIIT__Diploma_in_Design_and_Media,
    APIIT__Dinloma_in_International_Studies,
    APIIT_Certificate_in_Administrative_Skills_CAS,
    APlIT_Certificate_in_Information_and_Communication_Technology_CICT,
    Computing,_Technology_and_Games_Development_BSc_Hons_in_Information_Technology,
    BC_Hone_in_Computer_Goinncs_with_a_cnaciolicm_in_Date_Andivtics,
    Bachelor_of_Computer_Science_Hons_Intelligent_Systems,
    BSc_Hons_in_Multimedia_Technology,
    BSc_Hons_in_Multimedia_Technology_with_a_specialism_in_VR_,_AR_BS_Hons_in_Computer_Games_Development,
    BA_Hons_in_Business_Management,
    BA_Hons_in_Business_Management_with_a_specialism_in_EBusiness,
    BA_Hons_in_Business_Management_with_a_specialism_In_Digital_Leadershio,
    MSc_in_Software_Engineering,
    Master_of_Science_in_Artificial_Intelligence,
    Master_of_Science_in_Cyber_Security,
    MSc_in_Data_Science_and_Business_Analytics,
    MSc_in_Data_Science_and_Business_Analvtics_ODL,
    MSc_in_Information_Technology_Management,
    Master_of_Technology_Management,
    Master_of_Business_Administration,
    Master_of_Business_Administration_ODL,
    Master_of_Business_Administration_with_a_specialism_in_Digital_Leadership,
    Master_of_Business_Administration_Euro_Asia_Business,
    Master_of_Science_in_International_Business_Communications,
    Master_of_Science_in_Global_Marketing_Management,
    Master_of_Project_Management,
    PhD_in_Computing,
    PhD_in_Technology,
    PhD_in_Management,
    PhD_in_Finance,
    Doctor_of_Philosophy_in_Engineering,
    Doctor_of_Business_Administration_DBA
}

enum Country {
    Afghanistan,Albania,Algeria,Andorra,Angola,Antiguaand_Barbuda,Argentina,Armenia,Australia,Austria,

    Azerbaijan,Bahamas,Bahrain,Bangladesh,Barbados,Belarus,Belgium,

    Belize,Benin,Bermuda,Bhutan,Bolivia,Bosniaand_Herzegovina,Botswana,

    Brazil,Brunei,Bulgaria,

    Burkina_Faso,Burundi,Cambodia,Cameroon,Canada,Cape_Verde,

    Central_African_Republic,Chad,Chile,China,

    Colombia,Comoros,Costa_Rica,

    Croatia,Cuba,Cyprus,Czech_Republic,Democratic_Republic_of_the_Congo,

    Denmark,Djibouti,Dominica,Dominican_Republic,

    Ecuador,Egypt,ElSalvador,Equatorial_Guinea,Eritrea,Estonia,

    Ethiopia,Fiji,Finland,France,

    Gabon,Gambia,Georgia,Germany,Ghana,Greece,

    Grenada,Guam,Guatemala,Guinea,Guinea_Bissau,Guyana,

    Haiti,HolySee,Honduras,Hungary,Iceland,India,

    Indonesia,Iran,Iraq,Ireland,Israel,Italy,Ivory_Coast,Jamaica,

    Japan,Jordan,Kazakhstan,Kenya,Kiribati,Kuwait,

    Kyrgyzstan,Laos,Latvia,Lebanon,Lesotho,Liberia,Libya,Liechtenstein,

    Lithuania,Luxembourg,Madagascar,Malawi,Malaysia,

    Maldives,Mali,Malta,Marshall_Islands,Mauritania,Mauritius,Mexico,

    Micronesia,Moldova,Monaco,Mongolia,Montenegro,Morocco,Myanmar,

    Mozambique,Namibia,Nauru,Nepal,Netherlands,

    New_Zealand,Nicaragua,Niger,Nigeria,North_Korea,North_Macedonia,

    Norway,Oman,Pakistan,Palau,Palestine_State,Panama,

    Papua_New_Guinea,Paraguay,Peru,Philippines,Poland,

    Portugal,Puerto_Rico,Qatar,Republic_of_the_Congo,Romania,Russia,Rwanda,

    Saint_Kitts_and_Nevis,Saint_Lucia,

    Saint_Vincent_and_the_Grenadines,Samoa,San_Marino,

    Sao_Tome_and_Principe,Saudi_Arabia,Senegal,Serbia,Seychelles,Sierra_Leone,

    Singapore,Slovakia,Slovenia,Solomon_Islands,Somalia,South_Africa,South_Korea,

    Spain,SriLanka,Sudan,Suriname,Sweden,Switzerland,

    Syria,Tajikistan,Tanzania,Thailand,Timor_Leste,Togo,

    Tonga,Trinidad_and_Tobago,Tunisia,Turkey,Turkmenistan,

    Tuvalu,Uganda,Ukraine,United_Arab_Emirates,United_Kingdom,United_States,Uruguay,Uzbekistan,Vanuatu,Venezuela,Vietnam,

    Yemen,Zambia,Zimbabwe
}

export class UserEnum {
    static salutation: typeof Salutation = Salutation;
    static entryLevel: typeof EntryLevel = EntryLevel;
    static gender: typeof Gender = Gender;
    static country: typeof Country = Country;
    static studyMode: typeof StudyMode = StudyMode;
    static courseInterested: typeof CourseInterested = CourseInterested;
}